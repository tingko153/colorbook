<template>
    <div class="layout-container subpage-member">
        <div class="layout-content layout-detail">
            <p class="content-tit mem-tit">회원가입</p>
            <ul class="mem-list">
                <li>
                    <p class="mem-list-tit">이메일 아이디</p>
                    <div class="module-inputset mem-wrap">
                    <div class="input-wrap">
                    <input type="text" value="" class="element-input input-base " placeholder="dorothy@">
                        <span class="input-wrap-ic">
                        <span class="element-icon ic-caution-circle" type="submit">caution</span>
                        </span>
                    </div>
                    </div>
                </li>
                <li>
                    <p class="mem-list-tit">비밀번호</p>
                    <div class="module-inputset mem-wrap">
                        <div class="input-wrap">
                            <input type="text" value="" class="element-input input-base " placeholder="6~15자 비밀번호 입력">

                            <span class="input-wrap-ic">
                                <button class="element-icon ic-pw-view-off" type="submit">비밀번호 암호와 풀고 보기</button>
                                <!--<button class="element-icon ic-pw-view-on" type="submit">비밀번호 암호와 풀고 보기</button>-->
                                <span class="element-icon ic-caution-circle" type="submit">caution</span>
                            </span>
                        </div>
                    </div>
                    <div class="module-inputset mem-wrap">
                        <div class="input-wrap">
                            <input type="text" value="" class="element-input input-base " placeholder="비밀번호 재입력">
                            <span class="input-wrap-ic">
                            <button class="element-icon ic-pw-view-off" type="submit">비밀번호 암호와 풀고 보기</button>
                            <!--<button class="element-icon ic-pw-view-on" type="submit">비밀번호 암호와 풀고 보기</button>-->
                            <span class="element-icon ic-caution-circle" type="submit">caution</span>
                            </span>
                        </div>
                    </div>
                </li>
                <li>
                    <p class="mem-list-tit">본인인증</p>
                </li>
                <li>
                    <button class="element-btn  btn-pink size-48 ">
                        <span class="btn-txt">인증하기</span>
                    </button>
                </li>
            </ul>

            <div class="content-list">
                <p class="mem-list-tit">약관 동의</p>
                <ul class="list-line">
                    <li>
                        <span class="element-checkbox lg">
                            <input type="checkbox" name="" id="check1" class="checkbox-input">
                            <label for="check1">이용 약관에 모두 동의합니다.</label>
                        </span>
                    </li>
                    <li>
                        <span class="element-checkbox lg">
                            <input type="checkbox" name="" id="check2" class="checkbox-input">
                            <label for="check2">[필수] 14세 이상입니다.</label>
                        </span>
                        <a class="mem-agree-link" href="#">
                            보기
                            <span class="element-icon ic-arrow-right-link" style="">link</span>
                        </a>
                    </li>
                    <li>
                        <span class="element-checkbox lg">
                            <input type="checkbox" name="" id="check3" class="checkbox-input">
                            <label for="check3">[필수] 서비스 이용 약관 동의</label>
                        </span>
                        <a class="mem-agree-link" href="#">
                            보기
                            <span class="element-icon ic-arrow-right-link" style="">link</span>
                        </a>
                    </li>
                    <li>
                        <span class="element-checkbox lg">
                            <input type="checkbox" name="" id="check4" class="checkbox-input">
                            <label for="check4">[필수] 개인정보 취급 방침 동의</label>
                        </span>
                        <a class="mem-agree-link" href="#">
                            보기
                            <span class="element-icon ic-arrow-right-link" style="">link</span>
                        </a>
                    </li>
                    <li>
                        <span class="element-checkbox lg">
                            <input type="checkbox" name="" id="check5" class="checkbox-input" checked="">
                            <label for="check5">[선택] 도로시 마케팅 수신 동의</label>
                            </span>
                    </li>
                </ul>
                <button class="element-btn  btn-pink size-48" disabled="">
                    <span class="btn-txt">가입하기</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Regist'
}
</script>
