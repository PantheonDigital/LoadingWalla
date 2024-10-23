import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 25 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M23.37.476H1.747a.856.856 0 00-.858.86v15.342a.863.863 0 00.858.86H23.37a.856.856 0 00.858-.86V1.336a.863.863 0 00-.858-.86z"
        fill="#fff"
      />
      <Path
        d="M23.37.476h-.858a1.07 1.07 0 011.072 1.076v14.91a1.078 1.078 0 01-1.072 1.077h.857a.856.856 0 00.858-.861V1.336a.863.863 0 00-.858-.86z"
        fill="#fff"
      />
      <Path
        d="M21.268 1.769H3.848a.428.428 0 00-.429.43v1.022a.431.431 0 00.43.43h17.42a.428.428 0 00.428-.43V2.2a.43.43 0 00-.429-.43z"
        fill="#EF2323"
      />
      <Path
        d="M16.927 17.322h-1.585a.214.214 0 00-.214.216.216.216 0 00.214.215h1.585a.215.215 0 00.151-.368.214.214 0 00-.151-.063z"
        fill="#3A2C60"
      />
      <Path
        d="M23.37.26H1.747A1.071 1.071 0 00.676 1.336v15.34a1.079 1.079 0 001.072 1.077h12.713a.214.214 0 00.215-.215.216.216 0 00-.215-.216H1.748a.643.643 0 01-.643-.645V1.337A.648.648 0 011.748.69H23.37a.643.643 0 01.644.645v15.34a.647.647 0 01-.644.646h-5.558a.214.214 0 00-.215.216.215.215 0 00.215.215h5.557a1.08 1.08 0 001.072-1.076V1.337A1.08 1.08 0 0023.37.26z"
        fill="#3A2C60"
      />
      <Path
        d="M21.697 6.395h-8.11a.214.214 0 00-.214.215.216.216 0 00.215.215h8.11a.214.214 0 00.215-.215.216.216 0 00-.216-.215zM21.697 8.547h-8.11a.214.214 0 00-.214.215.216.216 0 00.215.215h8.11a.214.214 0 00.215-.215.216.216 0 00-.216-.215zM21.697 10.698h-8.11a.214.214 0 00-.214.215.216.216 0 00.215.215h8.11a.214.214 0 00.215-.215.216.216 0 00-.216-.215zM13.588 13.28h8.11a.214.214 0 00.215-.215.216.216 0 00-.215-.215h-8.11a.214.214 0 00-.215.215.215.215 0 00.215.215zM21.912 3.221V2.2a.648.648 0 00-.643-.645H3.848a.643.643 0 00-.644.645v1.022a.648.648 0 00.643.646h17.42a.643.643 0 00.644-.646zm-18.275 0V2.2a.212.212 0 01.211-.212h17.42a.21.21 0 01.212.212v1.022a.212.212 0 01-.212.212H3.848a.21.21 0 01-.214-.212h.003z"
        fill="#3A2C60"
      />
      <Path
        d="M10.725 10.408c0-.65-.192-1.286-.552-1.826a3.264 3.264 0 00-5.038-.498 3.29 3.29 0 00-.71 3.581c.248.6.668 1.114 1.206 1.475a3.266 3.266 0 004.135-.409c.614-.616.96-1.452.96-2.323zm-7.306 0c0-.8.237-1.583.68-2.248a4.018 4.018 0 016.202-.613 4.05 4.05 0 01.874 4.409A4.042 4.042 0 019.69 13.77a4.02 4.02 0 01-5.09-.503 4.052 4.052 0 01-1.18-2.86zm2.674-1.434a.886.886 0 01.831-.59h.918a.992.992 0 01.96.742 1 1 0 01-.465 1.121l-.508.293a.38.38 0 01-.381.357.377.377 0 01-.375-.363v-.212a.38.38 0 01.19-.329l.698-.402a.238.238 0 00-.119-.445h-.918a.123.123 0 00-.118.084l-.006.018a.378.378 0 01-.697.037.38.38 0 01-.015-.29l.006-.019-.001-.002zm.854 2.95a.507.507 0 01.602-.495.503.503 0 01.367.689.505.505 0 01-.822.164.505.505 0 01-.147-.357z"
        fill="#000"
      />
    </Svg>
  )
}

export default SvgComponent
