<template>
  <section>
    <div class="player-info">
      <div class="player-info__block player__photo">
        <img :src="require('@/assets/images/t-man.png')" alt="player-photo" />
      </div>
      <div class="player-info__block">
        <h2>Имя Фамилия Отчество</h2>
        <div class="player-info-generals">
          <div>
            <strong>Возраст</strong>
            <span>23 года</span>
          </div>
          <div>
            <strong>Место</strong>
            <span>Респ. Коми, Сыктывкар</span>
          </div>
          <div>
            <strong>Клуб</strong>
            <span>"Озон"</span>
          </div>
          <div>
            <strong>Ранкинг</strong>
            <span>752259</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
