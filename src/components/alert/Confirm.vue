<template>
    <div class="module-dimmed">
        <div class="dimmed-center">
            <div class="module-dialog dialog-basic dialog-size-md">
                <div class="dialog-container">
                    <div class="dialog-header">
                        <button class="dialog-close"><span class="element-icon ic-close-dialog" style="">close</span></button>
                    </div>
                    <div class="dialog-body">
                        <div class="dialog-content none-header-tit">
                            <p class="dialog-confim-text">해당 게시물의 새댓글 알림을 해제하시겠습니까?</p>
                        </div>
                    </div>
                    <div class="dialog-footer">
                        <div class="footer-container">
                            <button class="element-btn btn-round-40 btn-gray-line size-40">
                                <span class="btn-txt">취소</span>
                            </button>
                            <button class="element-btn btn-round-40 btn-pink size-40">
                                <span class="btn-txt">첨부</span>
                            </button>
                            <!--
                            <button class="element-btn btn-gray-line size-32">
                                <span class="btn-txt">취소</span>
                            </button>
                            <button class="element-btn btn-orange size-32">
                                <span class="btn-txt">확인</span>
                            </button>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Confirm'
}
</script>

<style scoped src="@/assets/css/modules/dialog.css" />
