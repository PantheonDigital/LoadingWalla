import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Geozone(props) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M21.204 12.282c0-5.672-4.598-10.27-10.27-10.27-2.52 0-4.827.907-6.613 2.413l-.372 2.803L1.383 8.5a10.211 10.211 0 00-.675 2.828l3.083 4.155-.574 3.576a10.244 10.244 0 007.688 3.494h.065a10.253 10.253 0 008.22-4.162l-.14-2.254 1.808-1.202c.226-.846.346-1.735.346-2.652z"
        fill="#A6E7F0"
      />
      <Path
        d="M10.934 2.012c-.611 0-1.21.054-1.79.156h-.001a10.228 10.228 0 00-4.822 2.257l-.372 2.803-2.566 1.271a10.211 10.211 0 00-.675 2.828l3.083 4.155-.574 3.576a10.244 10.244 0 007.688 3.494h.065c.484-.002.963-.038 1.429-.104-4.845-1.147-8.453-5.5-8.453-10.696 0-3.541 1.676-6.69 4.277-8.7.079-.062.182.036.126.119a7.802 7.802 0 00-1.316 4.346c0 3.497 2.299 6.466 5.464 7.478.28.09.469.35.469.643v5.882c0 .283.062.552.173.794a10.215 10.215 0 003.659-1.601v-5.075c0-.293.187-.554.466-.643a7.881 7.881 0 003.938-2.83C21.14 6.547 16.567 2.012 10.934 2.012z"
        fill="#6BD9E7"
      />
      <Path
        d="M15.914 14.526v6.994a1.032 1.032 0 11-2.064 0V10.506h2.064v4.02z"
        fill="#E5E1E5"
      />
      <Path
        d="M14.882 14.481a6.965 6.965 0 100-13.93 6.965 6.965 0 000 13.93z"
        fill="#FEE45A"
      />
      <Path
        d="M10.859 7.517a6.968 6.968 0 015.495-6.81 6.965 6.965 0 100 13.618 6.968 6.968 0 01-5.495-6.808z"
        fill="#FEDF30"
      />
      <Path
        d="M14.882 12.81a5.293 5.293 0 100-10.586 5.293 5.293 0 000 10.585z"
        fill="#6BD9E7"
      />
      <Path
        d="M12.874 12.415a6.944 6.944 0 01-2.015-4.898c0-1.91.77-3.64 2.014-4.899a5.295 5.295 0 000 9.797z"
        fill="#2ED1E2"
      />
      <Path
        d="M14.998 3.98a2.522 2.522 0 00-2.086 4.024l1.14 1.572c.187.258.318.552.386.863l.085.395a.424.424 0 00.828 0l.085-.395c.068-.311.2-.605.386-.863l1.14-1.572c.32-.43.506-.965.497-1.544a2.531 2.531 0 00-2.461-2.48z"
        fill="#EE6161"
      />
      <Path
        d="M12.01 18.729l-.48.175a.655.655 0 01-.504-.023l-1.399-.658a.655.655 0 01-.352-.767l.032-.119a.655.655 0 01.736-.472.655.655 0 00.562-.178l.263-.258a.655.655 0 01.926.01l.468.479.421.666a.44.44 0 01-.064.55l-.61.595z"
        fill="#97DA7B"
      />
      <Path
        d="M14.085 5.763a1.127 1.127 0 111.704 1.475 1.127 1.127 0 01-1.704-1.475z"
        fill="#F9F7F8"
      />
      <Path
        d="M20.8 14.933h.058a10.215 10.215 0 01-1.668 3.457l-.037-.04-.905-.987a.408.408 0 01.02-.571.407.407 0 00.121-.353l-.055-.382a.407.407 0 01.142-.371l.878-.736a.406.406 0 01.29-.094l1.156.077zM6.073 14.039c.341.267.479.719.346 1.131l-.496 1.54c-.044.137-.059.282-.044.424a1.036 1.036 0 01-.877 1.132l-.306.046a1.03 1.03 0 00-.353.12l-1.011.566-.115.06a10.23 10.23 0 01-2.51-7.731l3.534.385c.425.046.779.35.889.764l.185.701c.058.218.185.41.36.55l.398.312zM5.347 7.277a.728.728 0 01-.243.87l-.57.415a.727.727 0 01-.952-.084.727.727 0 00-.866-.137l-.24.128a.727.727 0 01-.397.083L1.383 8.5a10.291 10.291 0 012.938-4.074l.583.524a.726.726 0 01.242.54v1.163c0 .097.019.193.057.282l.144.343z"
        fill="#97DA7B"
      />
      <Path
        d="M3.946 11.752l.001-.072-3.24-.353a10.23 10.23 0 002.51 7.731l.115-.06 1.011-.566a1.03 1.03 0 01.353-.12l.306-.046c.32-.048.584-.237.737-.495a10.94 10.94 0 01-1.793-6.019zM4.394 8.64c.195-.66.45-1.295.758-1.897a.728.728 0 01-.006-.091V5.49a.726.726 0 00-.242-.541l-.583-.524a10.291 10.291 0 00-2.938 4.074l.696.053a.727.727 0 00.397-.083l.24-.128a.726.726 0 01.866.137c.214.222.54.28.812.162z"
        fill="#80D261"
      />
    </Svg>
  )
}

export default Geozone;