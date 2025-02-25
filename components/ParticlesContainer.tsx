"use client"

import { Particles } from "react-tsparticles"
import { loadFull } from "tsparticles"
import React, { useCallback } from "react"

const ParticlesContainer = () => {
  // init particles
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: any) => {
    console.log("particlesLoaded", container)
  }, [])

  return (
    <Particles
      className="w-full h-full absolute translate-z-0 -z-50"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: false,
        },
        background: {
          color: {
            value: "",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 90,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#00ff99",
          },
          links: {
            color: "#00ff99",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}

export default ParticlesContainer

// "use client"

// import { Particles } from "react-tsparticles"
// import { loadFull } from "tsparticles"
// import React, { useCallback } from "react"

// const ParticlesContainer = () => {
//   const particlesInit = useCallback(async (engine: any) => {
//     await loadFull(engine)
//   }, [])

//   const particlesLoaded = useCallback(async (container: any) => {
//     console.log("particlesLoaded", container)
//   }, [])

//   return (
//     <Particles
//       className="w-full h-full absolute translate-z-0 -z-50"
//       id="tsparticles"
//       init={particlesInit}
//       loaded={particlesLoaded}
//       options={{
//         fullScreen: { enable: false },
//         background: {
//           color: {
//             value: "",
//           },
//         },
//         fpsLimit: 120,
//         particles: {
//           number: {
//             value: 100, // Jumlah salju
//             density: {
//               enable: true,
//               area: 800,
//             },
//           },
//           shape: {
//             type: "image", // Menggunakan gambar sebagai partikel
//             image: {
//               src: "/snowflake.png", // Ganti dengan path gambar salju
//               width: 1,
//               height: 1,
//             },
//           },
//           opacity: {
//             value: 0.8,
//             random: true,
//           },
//           size: {
//             value: { min: 10, max: 30 }, // Ukuran bervariasi agar terlihat lebih alami
//             random: true,
//           },
//           move: {
//             enable: true,
//             speed: 1,
//             direction: "bottom", // Salju jatuh ke bawah
//             straight: false,
//           },
//         },
//         detectRetina: true,
//       }}
//     />
//   )
// }

// export default ParticlesContainer
