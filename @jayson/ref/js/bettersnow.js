(function() {
  const snowflakesCount = 11;
  const snowflakes = ["*"];
  
  const createSnowflakeStyle = () => {
      const style = document.createElement('style');
      style.textContent = `
          @keyframes snowflakes-fall {
              0% { top: -10%; }
              100% { top: 100%; }
          }
          @keyframes snowflakes-shake {
              0%, 100% { transform: translateX(0); }
              50% { transform: translateX(80px); }
          }
          .snowflake {
              color: rgb(255, 255, 255);
              font-family: Arial, sans-serif;
              text-shadow: 0 0 5px #000;
              font-size: 1em;
              position: fixed;
              top: -10%;
              z-index: 9999;
              user-select: none;
              cursor: default;
              animation-name: snowflakes-fall, snowflakes-shake;
              animation-duration: 10s, 3s;
              animation-timing-function: linear, ease-in-out;
              animation-iteration-count: infinite, infinite;
              animation-play-state: running, running;
          }
      `;
      document.head.appendChild(style);
  };

  const createSnowflake = (index) => {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.textContent = snowflakes[index % snowflakes.length];
      snowflake.style.left = `${(index * 10) + 1}%`;
      snowflake.style.animationDelay = `${(index % 2 === 0 ? index : Math.random() * 10)}s, ${Math.random() * 3}s`;
      document.body.appendChild(snowflake);
  };

  const initSnowflakes = () => {
      createSnowflakeStyle();
      for (let i = 0; i < snowflakesCount; i++) {
          createSnowflake(i);
      }
  };

  document.addEventListener('DOMContentLoaded', initSnowflakes);
})();
