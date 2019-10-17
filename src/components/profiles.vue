<template>
<<<<<<< HEAD
    <div>
        <bookinf>
        </bookinf>
        <commoninf></commoninf>
        <detailinf></detailinf>
        <inquiryinf></inquiryinf>
        <navjump></navjump>
    </div>
=======
<div>
    <bookinf></bookinf>
    <inquiryinf></inquiryinf>
    <commoninf></commoninf>
    <detailinf></detailinf>
    <navjump></navjump>
</div>
>>>>>>> tjf
</template>
<script>
import bookinf from "../pages/book_inf";
import commoninf from "../pages/common_inf";
import detailinf from "../pages/detail_inf";
import inquiryinf from "../pages/inquiry_inf";
import navjump from "../pages/navjump";

export default {
    data() {
        const mixin ={
    
        }
        return {
        }
    },
    created() {

    },
    components: {
        bookinf,
        navjump,
        commoninf,
        detailinf,
        inquiryinf,
    },
};
</script>
<style lang='scss' >
*{
    // background-color:#ccc;
}
</style>