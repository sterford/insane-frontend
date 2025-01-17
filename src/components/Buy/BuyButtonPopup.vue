<template>
  <button
    :disabled="!isPlanSelected"
    :class="[
      'flex items-center rounded-md px-4 py-2 text-3xl transition-shadow duration-200 text-white',
      isPlanSelected
        ? 'shadow-[0_4px_15px_rgba(255,255,255,0.5)] cursor-pointer bg-custom-gradient'
        : 'shadow-none cursor-not-allowed opacity-80 bg-custom-gradient'
    ]"
    @click="handleClick">
    {{ $t('pricing.button') }}
    <img src="@/assets/img/icons/buyico.svg" alt="icon" class="ml-2 w-10 h-10">
  </button>
  


  <notifications group="refferal" position="bottom left" class="z-50"/>

</template>

<script setup>
import { computed, ref } from 'vue';
import { notify } from "@kyvg/vue3-notification";

import { useSubscriptionStore } from '@/stores/SubStore';
import httpClient from '@/services/ApiService';

const subscriptionStore = useSubscriptionStore();
const isPlanSelected = computed(() => !!subscriptionStore.selectedPlan);
const showModal = ref(false);

const ref_code = ref('')


const handleClick = () => {
  if (isPlanSelected.value) {
    // Перенаправляем на страницу FunPay
    window.location.href = "https://funpay.com/users/13131464/";
  } else {
    notify({
      group: "refferal",
      type: "error",
      title: "Error",
      text: "Please select a plan first!",
    });
  }
};


const checkReferralCode = async (code) => {
    try {
        await httpClient.get('stat/check_ref/', {
            params: { code: code }
        });
        return true; 
    } catch (error) {
        console.error('Error checking referral code:', error);
        return false;
    }
};

const setReferralCode = async (code) => {
    const isValid = await checkReferralCode(code);
    
    if (isValid) {
        subscriptionStore.setRefCode(code);
        console.log(subscriptionStore);
        notify({
            group: "refferal",
            type: "success",
            title: "Success",
            text: "Refferal code activated",
        });
        getPayment();
    } else {
        console.log("error");
        notify({
            group: "refferal",
            type: "error",
            title: "Error",
            text: "No such refferal code!",
        });
    }
    
    getPayment();
};

const getPayment = () => {
    const sub_info = subscriptionStore.selectedPlan
    console.log("ПЕЙМЕНТ!")
}
</script>

