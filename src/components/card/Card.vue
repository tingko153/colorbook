<template>
    <router-link :to="{ name: 'detail', params: {id: 1}}">
        <span class="badge-wrap">
          <span class="badge-basic badge-red">출시예정</span>
          <span class="badge-basic badge-purple">20%</span>
        </span>
        <figure class="card-image" style="background-image: url(/assets/images/sample/card-list-sample.png)">
            <img src="/assets/images/sample/card-list-sample.png" alt=" " />
        </figure>
        <div class="card-desc">
            <figure class="card-image-user" style="background-image: url(/assets/images/sample/card-list-sample.png)">
                <img src="/assets/images/sample/card-list-sample.png" alt="강사이미지" />
            </figure>
            <p class="card-desc-tit">
                <span>최보민 마스터의</span>
                반영구 눈썹 마스터 골격편
            </p>
            <p class="card-desc-txt">
                눈 모양에 맞는 눈썹 쉐입 그리기
            </p>
            <div class="card-desc-pay">
                월 84,000원
                <span>(5개월)</span>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'Card'
}
</script>


