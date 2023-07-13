export default {
    methods: {
        print(element, title) {
            const innerHTML = element.innerHTML;
            // Get all stylesheets HTML
            let stylesHtml = "";
            for (const node of [
                    ...document.querySelectorAll('link[rel="stylesheet"], style'),
                ]) {
                stylesHtml += node.outerHTML;
            }

            // Open the print window
            const WinPrint = window.open(
                "", "", "left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0"
            );

            /**
             * To add custom fields in page header, apply property 'running-head' for the css element: 
             * https://www.w3.org/TR/WD-CSS2-971104/page.html#h-12.3.5
             * Ex: H2 {running-head: chapter}
             * also handle with just css:
             * https://stackoverflow.com/a/4121962
             */
            WinPrint.document.write(`<!DOCTYPE html> <html> 
                                <head>
                                 ${stylesHtml}
                                 <style>
                                 @media print {
                                    div.divFooter {
                                      position: fixed;
                                      bottom: 0em;
                                    }
                                    h2 {running-head: chapter}
                                 }
                                 </style>
                                </head>
                                <body>
                                    <div class="row">
                                        <div class="col-lg-4 col-md-4"></div>
                                        <div class="col-lg-6 col-md-6">
                                            <h3 class="report-title">${title}</h3>
                                            <h3 class="report-title">Printed By: User40</h3>
                                        </div>
                                    </div>
                                      ${innerHTML}
                                </body>
                                </html>`);
            // To add custom value in Footer, add this in body: 
            // <div class="divFooter">Custom Value</div>
            WinPrint.document.close();
            WinPrint.focus();
            WinPrint.print();
            WinPrint.onafterprint = () => {
                WinPrint.close();
            };
        }
    }
}