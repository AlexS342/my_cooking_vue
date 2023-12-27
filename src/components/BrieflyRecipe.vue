<template>
    <div class="brieflyRecipe">
        <div class="brieflyRecipe__picture">
        </div>
        <div class="brieflyRecipe__details">
            <p class="brieflyRecipe__detailsHeader">Наивкуснейший салат из свежих овощей с домашнего огорода на закуску к праздничому столу</p>
            <div class="brieflyRecipe__productList">
                <img class="brieflyRecipe__productImg" src="../assets/list.png" alt="list">
                <p class="brieflyRecipe__productText">свенина, конина, рыба, огурец, редиска, компот, ботинок, обезьяна, дум</p>
            </div>
            <div class="brieflyRecipe__detailsList">
                <img class="brieflyRecipe__detailsImg" src="../assets/time.png" alt="list">
                <p class="brieflyRecipe__detailsText">40 мин</p>
            </div>
        </div>

    </div>

</template>

<script>
export default {
    name: 'BrieflyRecipe',
}
</script>

<style lang="scss">
.brieflyRecipe {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    box-sizing: border-box;
    box-shadow: 0 0 5px 0 #bbbbbb;
    min-height: 40px;
    background-color: #FFFFFF;
}

.brieflyRecipe__picture {
    min-width: 100px;
    max-width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    overflow: hidden;
    background-image: url("../assets/img/grecheskiy-salat.jpg");
    background-position: center;
    background-size: cover;
}

.brieflyRecipe__pictureImg {
}

.brieflyRecipe__details {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    margin: 6px;
}

.brieflyRecipe__detailsHeader {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-weight: 700;
}
.brieflyRecipe__productList{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center
    //min-height: 2em;
    //max-height: 3em;
    //overflow: hidden;
}
.brieflyRecipe__productImg{
    min-width: 18px;
    min-height: 18px;
    max-width: 18px;
    max-height: 18px;
    margin-right: 3px;
}
.brieflyRecipe__productText{
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 14px;
    color: #8d8d8d;
}
.brieflyRecipe__detailsList{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;
    color: #8d8d8d;
    font-size: 12px;
}
.brieflyRecipe__detailsImg{
    min-width: 12px;
    min-height: 12px;
    max-width: 12px;
    max-height: 12px;
    margin-right: 3px;
}
.brieflyRecipe__detailsText{
    margin: 2px 4px;
}
.brieflyRecipe__detailsItem__green{
    background-color: #b3ffdd;
}
</style>