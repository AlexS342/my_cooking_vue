<template>
    <div class="brieflyRecipe">
        <div class="brieflyRecipe__picture">
        </div>
        <div class="brieflyRecipe__details">
            <p class="brieflyRecipe__detailsHeader">Салат греческий традиционный с баклажаном и редиской</p>
            <div class="brieflyRecipe__detailsList">
                <p class="brieflyRecipe__detailsItem">салаты</p>
                <p class="brieflyRecipe__detailsItem">приготовлено: 27</p>
                <p class="brieflyRecipe__detailsItem">лайк: 5684</p>
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    margin: 6px;
}

.brieflyRecipe__detailsHeader {
    min-height: 3em;
    max-height: 3em;
    overflow: hidden;
    font-weight: 700;
}
.brieflyRecipe__detailsList{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    color: #8d8d8d;
    font-size: 12px;
}
.brieflyRecipe__detailsItem{
    margin: 2px 4px;
}
.brieflyRecipe__detailsItem__green{
    background-color: #b3ffdd;
}
</style>