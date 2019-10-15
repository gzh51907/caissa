<template>
    <div>
        <bookinf>
        </bookinf>
        <commoninf></commoninf>
        <detailinf></detailinf>
        <inquiryinf></inquiryinf>
        <navjump></navjump>
    </div>
</template>
<script>
    import bookinf from '../pages/book_inf';
    import commoninf from '../pages/common_inf';
    import detailinf from '../pages/detail_inf';
    import inquiryinf from '../pages/inquiry_inf';
    import navjump from '../pages/navjump';

export default {
    components:{
    bookinf,
    commoninf,
    detailinf,
    inquiryinf,
    navjump
    }
}
</script>
<style >
el-row{
        height: 100%;
        }

    el-footer{
        position: fixed;
        width: 100%;
        left: 0;
        bottom: 0;
        z-index: 1000;

    }
</style>