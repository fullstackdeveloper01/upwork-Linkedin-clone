<template>
  <div
    style="background: rgba(242, 97, 60, 0.07)"
    class="w-full h-auto px-4 pt-12 pb-12 xl:px-0"
  >
    <div class="w-full mx-auto text-center xl:mx-auto xl:max-w-7xl">
      <h6 class="fw-600 tex-sm xl:text-xl">
        Work with Internationally recognized Talent from anywhere 
      </h6>

      <!-- Web version Freelance business -->
      <div class="hidden md:block xl:block">
        <div class="flex items-center mt-10 space-x-12">
          <img
            src="/home/agencies/aramco.png"
            class="transition-all duration-700 ease-in-out transform cursor-pointer hover:scale-110"
            alt=""
          />
         <img
            src="/home/agencies/tata.png"
            class="transition-all duration-700 ease-in-out transform cursor-pointer hover:scale-110"
            alt=""
          />
       
          <img
            src="/home/agencies/adani2.png"
            class="transition-all duration-700 ease-in-out transform cursor-pointer hover:scale-110"
            alt=""
          />

          <img
            src="/home/agencies/petrofac.svg"
            class="transition-all duration-700 ease-in-out transform cursor-pointer hover:scale-110"
            alt=""
          />

          <img
            src="/home/agencies/samsung.png"
            class="transition-all duration-700 ease-in-out transform cursor-pointer hover:scale-110"
            alt=""
          />
    

          <img
            src="/home/agencies/mcdermott.png"
            class="transition-all duration-700 ease-in-out transform cursor-pointer hover:scale-110"
            alt=""
          />
      

          <img
            src="/home/agencies/fluor.png"
            class="transition-all duration-700 ease-in-out transform cursor-pointer hover:scale-110"
            alt=""
          />
  
          <!-- <img
            src="/home/agencies/technipfmc.svg"
            class="transition-all duration-700 ease-in-out transform cursor-pointer hover:scale-110"
            alt=""
          /> -->
     
        </div>
      </div>

      <!-- Mobile version freelance business -->
      <tiny-slider
        v-bind="tinySliderOptions"
        class="block w-full mt-10 space-x-8 sm:hidden md:hidden xl:hidden"
      >
        <img
          src="/home/agencies/aramco.png"
          class="w-24 pl-6 transition-all duration-700 ease-in-out transform cursor-pointer hover:scale-110"
          alt=""
        />
        <img
          src="/home/agencies/tata.png"
          class="pl-6 transition-all duration-700 ease-in-out transform cursor-pointer w-28 hover:scale-110"
          alt=""
        />
        <img
          src="/home/agencies/adani2.png"
          class="pl-6 transition-all duration-700 ease-in-out transform cursor-pointer w-28 hover:scale-110"
          alt=""
        />
        <img
          src="/home/agencies/petrofac.svg"
          class="pl-6 transition-all duration-700 ease-in-out transform cursor-pointer w-28 hover:scale-110"
          alt=""
        />
        <img
          src="/home/agencies/samsung.png"
          class="pl-6 transition-all duration-700 ease-in-out transform cursor-pointer w-28 hover:scale-110"
          alt=""
        />
        <img
          src="/home/agencies/mcdermott.png"
          class="pl-6 transition-all duration-700 ease-in-out transform cursor-pointer w-28 hover:scale-110"
          alt=""
        />
        <img
          src="/home/agencies/fluor.png"
          class="pl-6 transition-all duration-700 ease-in-out transform cursor-pointer w-28 hover:scale-110"
          alt=""
        />
        <img
          src="/home/agencies/technipfmc.svg"
          class="pl-6 transition-all duration-700 ease-in-out transform cursor-pointer w-28 hover:scale-110"
          alt=""
        />
      </tiny-slider>

      <!-- Quality Work -->
      <div class="mt-20">
        <p class="text-xs uppercase fw-600 text-primary-500">
          most popular categories
        </p>

        <h2 class="text-xl fw-bold xl:text-4xl" style="font-weight: 800">
          Confidently hire your workforce globally 
        </h2>
        <p class="mt-2 text-xs fw-400 xl:text-sm">
          Qapin connects businesses with a network of source inspectors to get inspections done.
        </p>
      </div>

      <!-- WEB version Categoties Agencies -->
      <div class="hidden xl:block md:block">
        <div
          class="grid grid-cols-1 gap-3 mt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <div
            class="z-10 px-3 pt-3 transition-all duration-700 ease-in-out bg-white border border-white rounded-md cursor-pointer hover:bg-primary-500 hover:border-primary-500 hover:shadow-xl"
          >
            <div class="w-8 p-4 bg-green-500 rounded-md"></div>

            <h4
              style="font-weight: 700"
              class="mt-4 text-sm text-left text-theme-hover fw-bold xl:text-base"
            >
            Mechanical Inspectors 
            </h4>
            <!-- <h5 class="text-sm text-left fw-600">Inspectors</h5> -->
            <p class="mt-2 text-left uppercase fw-400">
              <span class="mr-3 text-xs cursor-pointer" style="color: #0082fa">
                2,760
              </span>
              experts
            </p>
          </div>

          <div
            class="z-10 px-3 pt-3 transition-all duration-700 ease-in-out bg-white border border-white rounded-md cursor-pointer hover:bg-primary-500 hover:border-primary-500 hover:shadow-xl"
          >
            <div class="w-8 p-4 rounded-md" style="background: #0082fa"></div>

            <h4
              style="font-weight: 700"
              class="mt-4 text-sm text-left fw-bold xl:text-base"
            >
            Electrical Inspectors
            </h4>
            <!-- <h5 class="text-sm text-left fw-600">Inspectors</h5> -->
            <p class="mt-2 text-left uppercase fw-400">
              <span class="mr-3 text-xs cursor-pointer" style="color: #0082fa">
                2,679
              </span>
              experts
            </p>
          </div>

          <div
            class="z-10 px-3 pt-3 transition-all duration-700 ease-in-out bg-white border border-white rounded-md cursor-pointer hover:bg-primary-500 hover:border-primary-500 hover:shadow-xl"
          >
            <div class="w-8 p-4 rounded-md" style="background: #ff3c3c"></div>

            <h4
              style="font-weight: 700"
              class="mt-4 text-sm text-left fw-bold xl:text-base"
            >
            Coating Inspectors 
            </h4>
            <!-- <h5 class="text-sm text-left fw-600">Inspectors</h5> -->
            <p class="mt-2 text-left uppercase fw-400">
              <span class="mr-3 text-xs cursor-pointer" style="color: #ff3c3c">
                1,543
              </span>
              experts
            </p>
          </div>

          <div
            class="z-10 px-3 pt-3 transition-all duration-700 ease-in-out bg-white border border-white rounded-md cursor-pointer hover:bg-primary-500 hover:border-primary-500 hover:shadow-xl"
          >
            <div class="w-8 p-4 rounded-md" style="background: #ffc737"></div>

            <h4
              style="font-weight: 700"
              class="mt-4 text-sm text-left fw-bold xl:text-base"
            >
            Hard Goods Inspectors 
            </h4>
            <!-- <h5 class="text-sm text-left fw-600">Inspectors</h5> -->
            <p class="mt-2 text-left uppercase fw-400">
              <span class="mr-3 text-xs cursor-pointer" style="color: #ffc737">
                2,276
              </span>
              experts
            </p>
          </div>
        </div>

        <div
          class="grid grid-cols-1 gap-3 mt-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <div
            class="z-10 px-3 pt-3 transition-all duration-700 ease-in-out bg-white border border-white rounded-md cursor-pointer agency-category hover:bg-primary-500 hover:border-primary-500 hover:shadow-xl"
          >
            <div class="w-8 p-4 rounded-md" style="background: #ff388c"></div>

            <h4
              style="font-weight: 700"
              class="mt-4 text-sm text-left fw-bold xl:text-base"
            >
            Safety Engineers 
            </h4>
            <!-- <h5 class="text-sm text-left fw-600">Inspectors</h5> -->
            <p class="mt-2 text-left uppercase fw-400">
              <span class="mr-3 text-xs cursor-pointer" style="color: #ff388c"
                >1,873</span
              >
              experts
            </p>
          </div>
          <div
            class="z-10 px-3 pt-3 transition-all duration-700 ease-in-out bg-white border border-white rounded-md cursor-pointer hover:bg-primary-500 hover:border-primary-500 hover:shadow-xl"
          >
            <div class="w-8 p-4 rounded-md" style="background: #2ddcbc"></div>

            <h4
              style="font-weight: 700"
              class="mt-4 text-sm text-left fw-bold xl:text-base"
            >
            Civil Engineers 
            </h4>
            <!-- <h5 class="text-sm text-left fw-600">Inspectors</h5> -->
            <p class="mt-2 text-left uppercase fw-400">
              <span class="mr-3 text-xs cursor-pointer" style="color: #2ddcbc"
                >3,162
              </span>
              experts
            </p>
          </div>
          <div
            class="z-10 px-3 pt-3 transition-all duration-700 ease-in-out bg-white border-2 border-white border-solid rounded-md cursor-pointer hover:bg-primary-500 hover:border-solid hover:border-primary-500 hover:shadow-xl"
          >
            <div class="w-8 p-4 rounded-md" style="background: #ca30e3"></div>

            <h4
              style="font-weight: 700"
              class="mt-4 text-sm text-left fw-bold xl:text-base"
            >
            Sourcing Agents 
            </h4>
            <!-- <h5 class="text-sm text-left fw-600">Inspectors</h5> -->
            <p class="mt-2 text-left uppercase fw-400">
              <span class="mr-3 text-xs cursor-pointer" style="color: #ca30e3"
                >2,453</span
              >
              experts
            </p>
          </div>

          <div
            class="z-10 px-3 pt-3 transition-all duration-700 ease-in-out bg-white border border-white rounded-md cursor-pointer hover:bg-primary-500 hover:border-primary-500 hover:shadow-xl"
          >
            <div class="w-8 p-4 rounded-md" style="background: #0082fa"></div>

            <h4
              style="font-weight: 700"
              class="mt-4 text-sm text-left fw-bold xl:text-base"
            >
            Apparel Inspectors 
            </h4>
            <!-- <h5 class="text-sm text-left fw-600">Inspectors</h5> -->
            <p class="mt-2 text-left uppercase fw-400">
              <span class="mr-3 text-xs cursor-pointer" style="color: #33ceff"
                >1,765
              </span>
              experts
            </p>
          </div>
        </div>
      </div>

      <!-- Mobile view Categoties agencies slider -->
      <tiny-slider
        v-bind="tinySliderOptions"
        class="block w-full mt-10 space-x-8 sm:hidden xl:hidden"
      >
        <div
          class="z-10 px-3 pt-3 transition-all duration-700 ease-in-out bg-white border border-white rounded-md cursor-pointer hover:bg-primary-500 hover:border-primary-500 hover:shadow-xl"
        >
          <div class="w-8 p-4 bg-green-500 rounded-md"></div>

          <h4
            style="font-weight: 700"
            class="mt-4 text-sm text-left text-theme-hover fw-bold xl:text-base"
          >
          Mechanical Inspectors 
          </h4>
          <!-- <h5 class="text-sm text-left fw-600">Inspectors</h5> -->
          <p class="mt-2 text-left uppercase fw-400">
            <span class="mr-3 text-xs cursor-pointer" style="color: #0082fa">
              2,760 
            </span>
            experts
          </p>
        </div>
        <div
          class="z-10 px-3 pt-3 transition-all duration-700 ease-in-out bg-white border border-white rounded-md cursor-pointer hover:bg-primary-500 hover:border-primary-500 hover:shadow-xl"
        >
          <div class="w-8 p-4 rounded-md" style="background: #0082fa"></div>

          <h4
            style="font-weight: 700"
            class="mt-4 text-sm text-left fw-bold xl:text-base"
          >
          Electrical Inspectors
          </h4>
          <!-- <h5 class="text-sm text-left fw-600">Inspectors</h5> -->
          <p class="mt-2 text-left uppercase fw-400">
            <span class="mr-3 text-xs cursor-pointer" style="color: #0082fa">
              2,679
            </span>
            experts
          </p>
        </div>
        <div
          class="z-10 px-3 pt-3 transition-all duration-700 ease-in-out bg-white border border-white rounded-md cursor-pointer hover:bg-primary-500 hover:border-primary-500 hover:shadow-xl"
        >
          <div class="w-8 p-4 rounded-md" style="background: #ff3c3c"></div>

          <h4
            style="font-weight: 700"
            class="mt-4 text-sm text-left fw-bold xl:text-base"
          >
          Coating Inspectors 
          </h4>
          <!-- <h5 class="text-sm text-left fw-600">Inspectors</h5> -->
          <p class="mt-2 text-left uppercase fw-400">
            <span class="mr-3 text-xs cursor-pointer" style="color: #ff3c3c">
              1,543 
            </span>
            experts
          </p>
        </div>
        <div
          class="z-10 px-3 pt-3 transition-all duration-700 ease-in-out bg-white border border-white rounded-md cursor-pointer hover:bg-primary-500 hover:border-primary-500 hover:shadow-xl"
        >
          <div class="w-8 p-4 rounded-md" style="background: #ffc737"></div>

          <h4
            style="font-weight: 700"
            class="mt-4 text-sm text-left fw-bold xl:text-base"
          >
          Hard Goods Inspectors 
          </h4>
          <!-- <h5 class="text-sm text-left fw-600">Inspectors</h5> -->
          <p class="mt-2 text-left uppercase fw-400">
            <span class="mr-3 text-xs cursor-pointer" style="color: #ffc737">
              2,276 
            </span>
            experts
          </p>
        </div>

        <div
          class="z-10 px-3 pt-3 transition-all duration-700 ease-in-out bg-white border border-white rounded-md cursor-pointer agency-category hover:bg-primary-500 hover:border-primary-500 hover:shadow-xl"
        >
          <div class="w-8 p-4 rounded-md" style="background: #ff388c"></div>

          <h4
            style="font-weight: 700"
            class="mt-4 text-sm text-left fw-bold xl:text-base"
          >
          Safety Engineers 
          </h4>
          <!-- <h5 class="text-sm text-left fw-600">Inspectors</h5> -->
          <p class="mt-2 text-left uppercase fw-400">
            <span class="mr-3 text-xs cursor-pointer" style="color: #ff388c"
              >1,873</span
            >
            experts
          </p>
        </div>
        <div
          class="z-10 px-3 pt-3 transition-all duration-700 ease-in-out bg-white border border-white rounded-md cursor-pointer hover:bg-primary-500 hover:border-primary-500 hover:shadow-xl"
        >
          <div class="w-8 p-4 rounded-md" style="background: #2ddcbc"></div>

          <h4
            style="font-weight: 700"
            class="mt-4 text-sm text-left fw-bold xl:text-base"
          >
          Civil Engineers 
          </h4>
          <!-- <h5 class="text-sm text-left fw-600">Inspectors</h5> -->
          <p class="mt-2 text-left uppercase fw-400">
            <span class="mr-3 text-xs cursor-pointer" style="color: #2ddcbc"
              >3,162 
            </span>
            experts
          </p>
        </div>
        <div
          class="z-10 px-3 pt-3 transition-all duration-700 ease-in-out bg-white border-2 border-white border-solid rounded-md cursor-pointer hover:bg-primary-500 hover:border-solid hover:border-primary-500 hover:shadow-xl"
        >
          <div class="w-8 p-4 rounded-md" style="background: #ca30e3"></div>

          <h4
            style="font-weight: 700"
            class="mt-4 text-sm text-left fw-bold xl:text-base"
          >
          Sourcing Agents 
          </h4>
          <!-- <h5 class="text-sm text-left fw-600">Inspectors</h5> -->
          <p class="mt-2 text-left uppercase fw-400">
            <span class="mr-3 text-xs cursor-pointer" style="color: #ca30e3"
              >2,453</span
            >
            experts
          </p>
        </div>
        <div
          class="z-10 px-3 pt-3 transition-all duration-700 ease-in-out bg-white border border-white rounded-md cursor-pointer hover:bg-primary-500 hover:border-primary-500 hover:shadow-xl"
        >
          <div class="w-8 p-4 rounded-md" style="background: #0082fa"></div>

          <h4
            style="font-weight: 700"
            class="mt-4 text-sm text-left fw-bold xl:text-base"
          >
          Apparel Inspectors 
          </h4>
          <!-- <h5 class="text-sm text-left fw-600">Inspectors</h5> -->
          <p class="mt-2 text-left uppercase fw-400">
            <span class="mr-3 text-xs cursor-pointer" style="color: #33ceff"
              >1,765 
            </span>
            experts
          </p>
        </div>
      </tiny-slider>

      <div class="mt-2">
        <p class="text-base fw-400">Don’t see what you looking for ?</p>
        <button
          @click="$router.push('/login')"
          class="w-full px-4 py-2 text-white transition-all duration-500 ease-in-out rounded-md shadow-sm cursor-pointer fw-400 md:w-52 hover:opacity-50 bg-primary-500 hover:shadow-lg"
        >
          Show All Categoties
        </button>
      </div>
    </div>
  </div>
</template>

<script type="module">
import "tiny-slider/src/tiny-slider.scss";
export default {
  components: {},

  data() {
    return {
      tinySliderOptions: {
        mouseDrag: true,
        loop: false,
        items: 2,
        gutter: 20,
        swipeAngle: 45,
      },
    };
  },
};
</script>

<style scoped>
.hero-text {
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 600;
  line-height: 75px;
}

.agency-category {
  background-color: white;
}
.text-xs {
  font-size: 19px;
    line-height: 1rem;
}
.agency-category:hover {
  background-color: peru;
}
@media (min-width: 1280px){

.xl\:text-4xl {
    font-size: 36px;
    line-height: 2.5rem;
}
}
.text-base{
  font-size: 19px;
}
</style>
