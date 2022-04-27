<template>
  <section>
    <div class="player-statistics">
      <div class="statistics">
        <div class="statistics__block">
          <h2>Статистика</h2>
          <div class="statistics-generals">
            <div>
              <strong>Турниров сыграно</strong>
              <span>100</span>
            </div>
            <div>
              <strong>Матчей сыграно</strong>
              <span>1001</span>
            </div>
            <div>
              <strong>Выиграно розыгрышей</strong>
              <span>752259</span>
            </div>
            <div>
              <strong>Проиграно розыгрышей</strong>
              <span>685234</span>
            </div>
          </div>
        </div>
        <div class="statistics__block">
          <h2>Статистика матчей</h2>
          <div class="player-matches">
            <div class="player__match-card">
              <div class="player__match-card_info">
                <div class="opponent text-ellipsis">
                  <span>против</span>
                  <strong>Фамилия И.О.</strong>
                </div>
                <div class="tournament text-ellipsis">
                  <a href="/#" target="_blank">Турнирчик</a>
                </div>
              </div>
              <div class="player__match-card_score">
                <strong>10 : 0</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
