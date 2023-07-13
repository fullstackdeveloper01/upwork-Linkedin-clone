import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

// Landing home page
import HomePage from "../views/landing-home/Index.vue";

// Middleware route

// Auth Login & Registration and Forgot password

import Login from "../components/Login.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import BasicInfo from "../views/sign-up/BasicInfo";
import updateUserprofile from "../views/sign-up/UpdateUserProfile.vue"; 
import AboutProfile from "../views/sign-up/AboutProfile";
import ResetLink from "../views/ResetLink.vue";
import ResetPassword from "../views/ResetPassword.vue";
import PrivacyPolicy from "../views/landing-home/privacy-policy.vue";
import TermsOfService from "../views/landing-home/terms-of-service";
import ContactUs from "../views/landing-home/contact-us";
import About from "../views/landing-home/About.vue";
import AgencySolutions from "../views/landing-home/AgencySolutions.vue";
import HowQapinWork from "../views/landing-home/HowQapinWork.vue";
import GlobalExpansion from "../views/landing-home/GlobalExpansion.vue";
import WhyQapin from "../views/landing-home/WhyQapin.vue";
import SafePayments from "../views/landing-home/SafePayments.vue";
import Certifications from "../views/landing-home/Certifications.vue";
import Pricing from "../views/landing-home/Pricing.vue";


// View Pages

import Dashboard from "../views/Dashboard.vue";
import InvitationAccept from "../views/InvitationAccept.vue";
import Verifyemail from "../views/Verifyemail.vue";
import NewsFeed from "../views/news-feed/NewsFeed.vue";
import FindJob from "../views/find-job/Index.vue";
import PostJob from "../views/post-job/Index.vue";
import ReviewPost from "../views/review-post/Index.vue";
import UserProfile from "../views/UserProfile.vue";
import Freelancer from "../views/freelancer/Index.vue";

// import Agency from "../views/agency/agency-index.vue";
import Chat from "../views/chat/index.vue";
import allContracts from "../views/freelancer/allContracts.vue";
import myJobs from "../views/freelancer/myJobs.vue";
import endContract from "../views/freelancer/endContract.vue";
import jobDetails from "../views/freelancer/jobDetails.vue";
import submitProposal from "../views/freelancer/submitProposal.vue";
import submitProposalslist from "../views/freelancer/submitProposalslist.vue";
import activeProposalslist from "../views/freelancer/activeProposalslist.vue";
import invitationInterviewlist from "../views/freelancer/invitationInterviewlist.vue";
import invitationDetail from "../views/freelancer/invitationDetails.vue";
import proposalDetails from "../views/freelancer/proposalDetails.vue";
import myProposals from "../views/freelancer/myProposals.vue";
import Offer from "../views/freelancer/Offer.vue";
import Milestones from "../views/freelancer/Milestones.vue";
import Transaction from "../views/freelancer/Transaction.vue";
import Profile from "../views/freelancer/Profile.vue"; 
import Agencyprofile from "../views/agency/agency-profile.vue";
import milestoneSubmition from "../views/freelancer/milestoneSubmition.vue";
import messagesFiles from "../views/freelancer/messagesFiles.vue";
import Settings from "../views/freelancer/Settings.vue";
import ClientSettings from "../views/client/Settings.vue";
import Search from "../views/freelancer/Search.vue";
import clientSearch from "../views/client/search.vue";
import clientNew from "../views/client/clientNew.vue"; 
import ContractDetails from "../views/client/ContractDetail.vue"; 
import freelanceNew from "../views/freelancer/freelanceNew.vue";
import agencyNew from "../views/freelancer/agencyNew.vue";
import saveJobs from "../views/freelancer/saveJobs.vue";
import savedUser from "../views/client/saved-user.vue";
//import publicProfile from "../views/freelancer/publicProfile.vue";
import ContractDetail from "../views/freelancer/ContractDetail.vue"; 
import addWiretransfer from "../views/freelancer/addWiretransfer.vue"; 

import postJob from "../views/client/postJob.vue";
import clientDashboard from "../views/client/clientDashboard.vue";
import postReview from "../views/client/postReview.vue";
import postJobInvite from "../views/client/postJob-invite.vue";
import jobPosting from "../views/client/jobPosting.vue";
import draftPosting from "../views/client/draftPosting.vue";
import ClientContracts from "../views/client/allContract.vue";
import index from "../views/client/jobpostreview/index.vue";
import hireDetails from "../views/client/jobpostreview/hireDetails.vue";
import hireFreelancer from "../views/client/hireFreelancer.vue";
import offerDetails from "../views/client/jobpostreview/offerDetails.vue";
import jobpostjobDetails from "../views/client/jobpostreview/JobDetails.vue";
import messageDetails from "../views/client/jobpostreview/MessageFullDetails.vue";
import ViewProfile from "../views/client/jobpostreview/ViewProfile.vue";
import freelancerProfile from "../views/client/UserProfile.vue";
import agencyPublicProfile from "../views/agency/agency-public-Profile.vue"; 
import ClientendContract from "../views/client/endContract.vue";

import jobsDetail from "../views/client/jobsDetail.vue";
import freelancerDetails from "../views/client/freelancerDetails.vue";
// import allContract from "../views/client/allContract.vue";
import yourHires from "../views/client/yourHires.vue";
import clientTalent from "../views/client/clientTalent.vue";
import expandTeam from "../views/client/expandTeam.vue";
import Milestone from "../views/client/Milestone.vue";
import milestoneSubmission from "../views/client/milestoneSubmission.vue";
// import inviteDetails from "../views/client/inviteDetails.vue";
// import Paymentgateway from "../components/Paymentgateway.vue";

// import { ValidationProvider } from 'vee-validate';
Vue.use(VueRouter);
// Vue.component('ValidationProvider', ValidationProvider);

const routes = [
  // default route
  { path: "*", component: clientDashboard },
  
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },

  // {
  //   path: "paymentgateway",
  //   name: "payment-gateway",
  //   component: Paymentgateway,
  //   meta: { requiresAuth: true },

  // },

  {
    path: "/client/post-job/:pid",
    name: "post-job",
    component: postJob,
    // props: true,
    meta: { requiresAuth: true },
  },
  {
    path: "/client/dashboard",
    name: "clientDashboard",
    component: clientDashboard,
    meta: { requiresAuth: true },
  },
  {
    path: "/client/post-review/:pid",
    name: "postReview",
    component: postReview,
    meta: { requiresAuth: true },
  },
  {
    path: "/client/post-job-invite/:uid",
    name: "postJobInvite",
    component: postJobInvite,
    meta: { requiresAuth: true },
  },
  
  {
    path: "/client/job-posting/:pid",
    name: "jobPosting",
    component: jobPosting,
    meta: { requiresAuth: true },
  },

  {
    path: "/chat",
    name: "chat",
    component: Chat,
    meta: { requiresAuth: true },
  },
  {
    path: "/client/draft-posting",
    name: "draftPosting",
    component: draftPosting,
    meta: { requiresAuth: true },
  },
  {
    path: "/client/all-contracts",
    name: "ClientContracts",
    component: ClientContracts,
    meta: { requiresAuth: true },
  },
  {
    path: "/client/jobpostreview/job-details/:pid",
    name: "jobpostreview/job-details",
    component: jobpostjobDetails,
    meta: { requiresAuth: true },
  },
  {
    path: "/client/jobpostreview/:pid",
    name: "index",
    component: index,
    meta: { requiresAuth: true },
    props:true,
  },
  {
    path: "/client/jobpostreview/message-details/:pid/:uid",
    name: "messageDetails",
    component: messageDetails,
    meta: { requiresAuth: true },
  },
  {
    path: "/client/jobpostreview/contract-detail/:pid/:uid",
    name: "contractDetails",
    component: ContractDetails,
    meta: { requiresAuth: true },
  },

  {
    path: "/client/jobpostreview/ViewProfile/:pid/:uid",
    name: "ViewProfile",
    component: ViewProfile,
    meta: { requiresAuth: true },
  },
  {
    path: "/client/freelancer-Profile/:uid",
    name: "clientProfile",
    component: freelancerProfile,
    meta: { requiresAuth: true },
  },
  {
    path: "/client/hire-details/:pid/:uid",
    name: "hiredetails",
    component: hireDetails,
    meta: { requiresAuth: true },
  },
  {
    path: "/client/hire-freelancer/:uid",
    name: "hireFreelancer",
    component: hireFreelancer,
    meta: { requiresAuth: true },
  },
  {
    path: "/client/offer-details/:pid/:uid",
    name: "offerdeatils",
    component: offerDetails,
    meta: { requiresAuth: true },
  },
  {
    path: "/client/jobs-detail",
    name: "jobsDetail",
    component: jobsDetail,
    meta: { requiresAuth: true },
  },
  {
    path: "/client/freelancer-detail/:uid",
    name: "freelancerDetails",
    component: freelancerDetails,
    meta: { requiresAuth: true },
  },
  // {
  //   path: "/client/all-contract",
  //   name: "allContract",
  //   component: allContract,
  //   meta: { requiresAuth: true },
  // },
  {
    path: "/client/your-hires",
    name: "yourHires",
    component: yourHires,
    meta: { requiresAuth: true },
  },
  {
    path: "/client/talent",
    name: "clientTalent",
    component: clientTalent,
    meta: { requiresAuth: true },
  },
  {
    path: "/client/expand-team",
    name: "expandTeam",
    component: expandTeam,
    meta: { requiresAuth: true },
  },
  {
    path: "/client/search",
    name: "clientSearch",
    meta: { requiresAuth: true },
    component: clientSearch,
    // props: true
  },
  {
    path: "/client/milestone",
    name: "Milestone",
    meta: { requiresAuth: true },
    component: Milestone,
  },
  {
    path: "/client/milestone-submission",
    name: "milestoneSubmission",
    meta: { requiresAuth: true },
    component: milestoneSubmission,
  },
  {
    path: "/client/end-contract/:pid/:uid",
    name: "endContractClient",
    meta: { requiresAuth: true },
    component: ClientendContract,
  },

  // Auth Guard
  {
    path: "/dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  // Auth Guard
  {
    path: "/invitation-accepted",
    name: "/InvitationAccept",
    component: InvitationAccept,
  },
  // Auth Guard
  {
    path: "/verify-email/:pid",
    name: "/Verifyemail",
    component: Verifyemail,
  },
  // Login
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  // Forgot Password
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    // meta: { requiresAuth: true },
  },
  // Expire Link
  {
    path: "/expire-link",
    name: "ExpireLink",
    component: ResetLink,
    // meta: { requiresAuth: true },
  },
  // Reset Link
  {
    path: "/reset-password/:pid",
    name: "ResetPassword",
    component: ResetPassword,
    // meta: { requiresAuth: true },
  },
  // Sign up
  {
    path: "/sign-up",
    name: "BasicInfo",
    component: BasicInfo,
  },
  // Sign up
  {
    path: "/update-profile",
    name: "update-profile",
    component: updateUserprofile,
    meta: { requiresAuth: true },
  },
  
  {
    path: "/sign-up/about-profile",
    name: "AboutProfile",
    component: AboutProfile,
  },
  // View Pages routes
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: "/news-feed",
    name: "NewsFeed",
    component: NewsFeed,
    meta: { requiresAuth: true },
  },

  {
    path: "/find-job",
    name: "FindJob",
    component: FindJob,
    meta: { requiresAuth: true },
  },

  {
    path: "/post-job",
    name: "PostJob",
    component: PostJob,
    meta: { requiresAuth: true },
  },

  {
    path: "/review-post",
    name: "ReviewPost",
    component: ReviewPost,
    meta: { requiresAuth: true },
  },

  {
    path: "/user-profile",
    name: "UserProfile",
    component: UserProfile,
    meta: { requiresAuth: true },
  },

  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/agency-solutions",
    name: "AgencySolutions",
    component: AgencySolutions,
  },

  {
    path: "/how-it-work",
    name: "HowQapinWork",
    component: HowQapinWork,
  },

  {
    path: "/global-expansion",
    name: "GlobalExpansion",
    component: GlobalExpansion,
  },
  {
    path: "/safe-payments",
    name: "SafePayments",
    component: SafePayments,
  },
  
  {
    path: "/why-qapin",
    name: " WhyQapin",
    component: WhyQapin,
  },

  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: PrivacyPolicy,
    // meta: { requiresAuth: true },
  },
  {
    path: "/terms-of-service",
    name: "TermsOfService",
    component: TermsOfService,
    // meta: { requiresAuth: true },
  },

  {
    path: "/certifications",
    name: "Certifications",
    component: Certifications,
  
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: Pricing,
    // meta: { requiresAuth: true },
  },
  
  {
    path: "/contact-us",
    name: "ContactUs",
    component: ContactUs,
    // meta: { requiresAuth: true },
  },
  {
    path: "/freelancer",
    name: "Freelancer",
    meta: { requiresAuth: true },
    component: Freelancer,
  },
  // {
  //   path: "/agency",
  //   name: "Agency",
  //   meta: { requiresAuth: true },
  //   component: Agency,
  // },
  {
    path: "/add-wire-transfer",
    name: "addWiretransfer",
    meta: { requiresAuth: true },
    component: addWiretransfer,
  },
  {
    path: "/update-wire-transfer/:aid",
    name: "updateWiretransfer",
    meta: { requiresAuth: true },
    component: addWiretransfer,
  },
  {
    path: "/freelancer/job-details",
    name: "freelancerjobDetails",
    meta: { requiresAuth: true },
    component: jobDetails,
    props: true
  },
  {
    path: "/agency/job-details",
    name: "agencyjobDetails",
    meta: { requiresAuth: true },
    component: jobDetails,
    props: true
  },
  {
    path: "/freelancer/contract-detail/:pid",
    name: "freelancercontractDetail",
    component: ContractDetail,
    meta: { requiresAuth: true },
  },
  {
    path: "/agency/contract-detail/:pid",
    name: "agencycontractDetail",
    component: ContractDetail,
    meta: { requiresAuth: true },
  },
  {
    path: "/freelancer/end-contract/:pid",
    name: "endContractFeelancer",
    meta: { requiresAuth: true },
    component: endContract,
  },
  {
    path: "/freelancer/submit-proposal",
    name: "freelancersubmitProposal",
    meta: { requiresAuth: true },
    component: submitProposal,
  },
  {
    path: "/agency/submit-proposal",
    name: "agencysubmitProposal",
    meta: { requiresAuth: true },
    component: submitProposal,
  },
  {
    path: "/freelancer/proposal-details",
    name: "freelancerproposalDetails",
    meta: { requiresAuth: true },
    component: proposalDetails,
  },
  {
    path: "/agency/proposal-details",
    name: "agencyproposalDetails",
    meta: { requiresAuth: true },
    component: proposalDetails,
  },
  {
    path: "/freelancer/all-contracts",
    name: "allContracts",
    meta: { requiresAuth: true },
    component: allContracts,
  },
  {
    path: "/agency/all-contracts",
    name: "agencyallContracts",
    meta: { requiresAuth: true },
    component: allContracts,
  },
  {
    path: "/freelancer/my-jobs",
    name: "freelancerMyjobs",
    meta: { requiresAuth: true },
    component: myJobs,
  },
  {
    path: "/agency/my-jobs",
    name: "agencyMyjobs",
    meta: { requiresAuth: true },
    component: myJobs,
  },
  {
    path: "/freelancer/my-proposals",
    name: "myProposals",
    meta: { requiresAuth: true },
    component: myProposals,
  },
  {
    path: "/agency/my-proposals",
    name: "agencymyProposals",
    meta: { requiresAuth: true },
    component: myProposals,
  },
  {
    path: "/freelancer/submit-proposals-list",
    name: "freelancersubmitProposalslist",
    meta: { requiresAuth: true },
    component: submitProposalslist,
  },
  {
    path: "/agency/submit-proposals-list",
    name: "agencysubmitProposalslist",
    meta: { requiresAuth: true },
    component: submitProposalslist,
  },
  {
    path: "/freelancer/active-proposals-list",
    name: "freelanceractiveProposalslist",
    meta: { requiresAuth: true },
    component: activeProposalslist,
  },
  {
    path: "/agency/active-proposals-list",
    name: "agencyactiveProposalslist",
    meta: { requiresAuth: true },
    component: activeProposalslist,
  },
  {
    path: "/freelancer/invitation-interview-list",
    name: "freelancerinvitationInterviewlist",
    meta: { requiresAuth: true },
    component: invitationInterviewlist,
  },
  {
    path: "/agency/invitation-interview-list",
    name: "agencyinvitationInterviewlist",
    meta: { requiresAuth: true },
    component: invitationInterviewlist,
  },
  {
    path: "/freelancer/invitation-detail/:pid",
    name: "freelancerinvitationDetail",
    meta: { requiresAuth: true },
    component: invitationDetail,
  },
  {
    path: "/agency/invitation-detail/:pid",
    name: "agencyinvitationDetail",
    meta: { requiresAuth: true },
    component: invitationDetail,
  },
  {
    path: "/freelancer/offer/:pid/:uid/",
    name: "freelancerOffer",
    meta: { requiresAuth: true },
    component: Offer,
  },
  {
    path: "/agency/offer/:pid/:uid",
    name: "agencyOffer",
    meta: { requiresAuth: true },
    component: Offer,
  },
  {
    path: "/freelancer/milestones",
    name: "Milestones",
    meta: { requiresAuth: true },
    component: Milestones,
  },
  {
    path: "/freelancer/transaction",
    name: "Transaction",
    meta: { requiresAuth: true },
    component: Transaction,
  }, 
  {
    path: "/agency-profile",
    name: "agency-profile",
    meta: { requiresAuth: true },
    component: Agencyprofile,
  },
  {
    path: "/my-profile",
    name: "Profile",
    meta: { requiresAuth: true },
    component: Profile,
  },
  {
    path: "/freelancer/milestone-submition",
    name: "milestoneSubmition",
    meta: { requiresAuth: true },
    component: milestoneSubmition,
  },
  {
    path: "/freelancer/messages-files",
    name: "messagesFiles",
    meta: { requiresAuth: true },
    component: messagesFiles,
  },
  {
    path: "/settings",
    name: "Settings",
    meta: { requiresAuth: true },
    component: Settings,
    props:true
  },
  {
    path: "/settings/addfreelancer",
    name: "clientSettings",
    meta: { requiresAuth: true },
    component: ClientSettings,
    props:true
  },
  {
    path: "/freelancer/search",
    name: "Search",
    meta: { requiresAuth: true },
    component: Search,
    // props: true
  },
  {
    path: "/agency/search",
    name: "agencySearch",
    meta: { requiresAuth: true },
    component: Search,
    // props: true
  },
  {
    path: "/add-freelancer-account",
    name: "addFreelanceAccount",
    meta: { requiresAuth: true },
    component: freelanceNew,
  },
  {
    path: "/add-client-account",
    name: "addClientAccount",
    meta: { requiresAuth: true },
    component: clientNew,
  },
  {
    path: "/add-agency-account",
    name: "agencyNew",
    meta: { requiresAuth: true },
    component: agencyNew,
  },
  {
    path: "/public-profile/:uid",
    name: "freelancerProfile",
    component: freelancerProfile,
    meta: { requiresAuth: true },
  },
  {
    path: "/agency-public-profile/:uid",
    name: "agencyPublicProfile",
    component: agencyPublicProfile,
    meta: { requiresAuth: true },
  },
  
  {
    path: "/saved-jobs",
    name: "saveJobs",
    meta: { requiresAuth: true },
    component: saveJobs,
  },

  {
    path: "/client/saved-freelancer",
    name: "savedUser",
    meta: { requiresAuth: true },
    component: savedUser,
  },
  {
    path: "/client/hired-freelancer",
    name: "hiredUser",
    meta: { requiresAuth: true },
    component: savedUser,
  },
]

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  var loadPath      = to.path.split("/")[1];
  var URL2          = to.path.split("/")[2];
  var vuex          = JSON.parse(localStorage.getItem('vuex'));
  // if(vuex.currentUserData.updateProfile_afterVerification == 0 && store.accountType == 'freelancer'){
  if(loadPath == 'public-profile' || loadPath == 'agency-public-profile'){
    next();
  }else{
    const requiresAuth  = to.matched.some((record) => record.meta.requiresAuth);
    const isUserLogin   = localStorage.getItem("token");
    store.commit("isNewsfeed", true);
    if (to.name == "NewsFeed" || to.name == "ExpireLink" || to.name=="ResetPassword" || to.name=="Login") {
      store.commit("isNewsfeed", false);
    }
    if(loadPath == 'settings' && URL2 == 'addfreelancer' ){
      loadPath        = 'settings/addfreelancer';
    }
    if (requiresAuth && !isUserLogin) {
      next("/login");
    }else if(URL2=='submit-proposal' && vuex.accountType == loadPath && vuex.accountType != 'client'){
      next();
    } else if (requiresAuth && isUserLogin) {
      // var accountType = localStorage.getItem("accountType"); 
      if(vuex.accountType == loadPath && vuex.accountType != 'freelancer'){
        next();
      }else if(vuex.accountType == loadPath && vuex.accountType == 'freelancer' && vuex.currentUserData.updateProfile_afterVerification == 1){
        next();
      }else{
        if(loadPath =='add-client-account' || loadPath == 'settings' || loadPath == 'saved-jobs' || loadPath == 'news-feed' 
          || loadPath == 'public-profile' || loadPath =='my-profile' || loadPath == 'add-wire-transfer' || loadPath == 'update-wire-transfer' 
          || loadPath =='add-freelancer-account' || loadPath == 'agency-public-profile' || loadPath == 'chat' || loadPath == 'update-profile'){
            if(vuex.accountType == 'freelancer' && vuex.currentUserData.updateProfile_afterVerification == 0 && loadPath != 'update-profile'){
              window.location.href = "update-profile";
            }else if(vuex.accountType == 'freelancer' && vuex.currentUserData.updateProfile_afterVerification == 1 && loadPath == 'update-profile'){
              window.location.href = "/freelancer";
            }else{
              next();
            }
        }else if(vuex.accountType == 'agency' && loadPath == 'agency-profile' ){
          next();
        }else if(vuex.accountType == 'freelancer' && loadPath=='add-agency-account'){
          next();
        }else if(vuex.accountType == 'client' && loadPath=='settings/addfreelancer'){
          next();
        }else{ 
          if (window.history.state == null) {
            if(vuex.accountType == 'freelancer' && vuex.currentUserData.updateProfile_afterVerification == 0){
              window.location.href = "/update-profile";
            }else if(vuex.accountType=='agency'){
              window.location.href = "/agency/search";
              // this.$router.push("/agency");
            }else if(vuex.accountType =='freelancer'){
              window.location.href = "/freelancer";
              // this.$router.push("/freelancer");
            }else if(vuex.accountType=='client'){
              window.location.href = "/client/dashboard";
              // this.$router.push("/client/dashboard");
            }
          }else{
            window.history.back()
          }
        }
      }
    } else {
      next();
    }
  } 
});
export default router;