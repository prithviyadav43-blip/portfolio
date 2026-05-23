import './App.css'

import { motion } from "framer-motion"

import { TypeAnimation } from 'react-type-animation'

import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa"

import photo from './assets/photo.jpeg'

import dashboard1 from './assets/dashboard1.png'
import dashboard2 from './assets/dashboard2.png'
import dashboard3 from './assets/dashboard3.png'

function App() {

  const isMobile = window.innerWidth < 768

  return (

    <div style={{
      background:
        "radial-gradient(circle at top,#1a1a1a,#050505)",
      color: "white",
      minHeight: "100vh",
      overflowX: "hidden"
    }}>

      {/* NAVBAR */}

      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: isMobile ? "20px" : "25px 60px",
        borderBottom: "1px solid #222",
        position: "sticky",
        top: "0",
        backgroundColor: "rgba(0,0,0,0.9)",
        backdropFilter: "blur(10px)",
        zIndex: "1000"
      }}>

        <h1 style={{
          color: "#facc15",
          fontSize: isMobile ? "28px" : "34px",
          fontWeight: "bold"
        }}>
          Prithvi
        </h1>

        <div style={{
          display: "flex",
          gap: isMobile ? "15px" : "30px"
        }}>

          {["Home","About","Skills","Projects","Contact"].map((item)=>(

            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: isMobile ? "15px" : "18px"
              }}
            >
              {item}
            </a>

          ))}

        </div>

      </nav>

      {/* HERO SECTION */}

      <motion.section
        id="home"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: isMobile ? "column-reverse" : "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: isMobile ? "40px 20px" : "80px",
          gap: "50px"
        }}
      >

        {/* LEFT */}

        <div>

          <h1 style={{
            fontSize: isMobile ? "70px" : "160px",
            fontWeight: "900",
            margin: "0",
            fontFamily: "'Bebas Neue', sans-serif",
            letterSpacing: "8px"
          }}>
            PORTFOLIO
          </h1>

          <h2 style={{
            fontSize: isMobile ? "50px" : "90px",
            marginTop: "10px",
            color: "#facc15",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: "900"
          }}>
            Prithvi Yadav
          </h2>

          {/* TYPING */}

          <TypeAnimation
            sequence={[
              'Business Analyst',
              2000,
              'Power BI Developer',
              2000,
              'Data Analyst',
              2000,
              'MIS Executive',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            style={{
              color: '#d1d5db',
              fontSize: isMobile ? '24px' : '38px',
              display: 'block',
              marginTop: '20px',
              fontWeight: '600'
            }}
          />

          {/* BUTTONS */}

          <div style={{
            marginTop: "40px",
            display: "flex",
            gap: "20px",
            flexWrap: "wrap"
          }}>

            <button style={{
              padding: "18px 40px",
              backgroundColor: "#facc15",
              color: "black",
              border: "none",
              borderRadius: "12px",
              fontWeight: "bold",
              fontSize: "20px",
              cursor: "pointer"
            }}>
              Hire Me
            </button>

            <a
              href="/resume.pdf"
              download
              style={{
                padding: "18px 40px",
                border: "2px solid #facc15",
                color: "#facc15",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "20px"
              }}
            >
              Download Resume
            </a>

          </div>

        </div>

        {/* IMAGE */}

        <img
          src={photo}
          alt="profile"
          style={{
            width: isMobile ? "250px" : "350px",
            height: isMobile ? "250px" : "350px",
            objectFit: "cover",
            borderRadius: "50%",
            border: "5px solid #facc15",
            boxShadow: "0 0 40px rgba(250,204,21,0.5)"
          }}
        />

      </motion.section>

      {/* ABOUT */}

      <section
        id="about"
        style={{
          padding: isMobile ? "60px 20px" : "100px 80px"
        }}
      >

        <h2 style={{
          fontSize: isMobile ? "45px" : "70px",
          marginBottom: "30px"
        }}>
          ABOUT ME
        </h2>

        <p style={{
          color: "#9ca3af",
          fontSize: isMobile ? "18px" : "24px",
          lineHeight: "40px",
          maxWidth: "1000px"
        }}>
          Passionate Business Analyst and Power BI Developer
          skilled in Excel, SQL, Python and Dashboard Development.
        </p>

      </section>

      {/* SKILLS */}

      <section
        id="skills"
        style={{
          padding: isMobile ? "60px 20px" : "100px 80px",
          backgroundColor: "#0d0d0d"
        }}
      >

        <h2 style={{
          fontSize: isMobile ? "45px" : "70px",
          marginBottom: "50px"
        }}>
          SKILLS
        </h2>

        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "35px",
          maxWidth: "900px"
        }}>

          {[
            { name: "Power BI", value: "95%" },
            { name: "Excel", value: "90%" },
            { name: "SQL", value: "85%" },
            { name: "Python", value: "80%" },
            { name: "Business Analysis", value: "92%" }
          ].map((skill,index)=>(

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >

              <div style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "12px"
              }}>

                <h3 style={{
                  fontSize: "28px"
                }}>
                  {skill.name}
                </h3>

                <span style={{
                  color: "#facc15",
                  fontWeight: "bold",
                  fontSize: "24px"
                }}>
                  {skill.value}
                </span>

              </div>

              <div style={{
                width: "100%",
                height: "28px",
                backgroundColor: "#1f1f1f",
                borderRadius: "50px",
                overflow: "hidden"
              }}>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.value }}
                  transition={{ duration: 1.5 }}
                  style={{
                    height: "100%",
                    borderRadius: "50px",
                    background:
                      "linear-gradient(to right,#facc15,#fde68a)"
                  }}
                />

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* PROJECTS */}

      <section
        id="projects"
        style={{
          padding: isMobile ? "60px 20px" : "100px 80px"
        }}
      >

        <h2 style={{
          fontSize: isMobile ? "45px" : "70px",
          marginBottom: "50px"
        }}>
          PROJECTS
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns:
            isMobile
              ? "1fr"
              : "repeat(auto-fit,minmax(350px,1fr))",
          gap: "30px"
        }}>

          {[dashboard1,dashboard2,dashboard3].map((img,index)=>(

            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03
              }}
              style={{
                backgroundColor: "#111",
                borderRadius: "20px",
                overflow: "hidden"
              }}
            >

              <img
                src={img}
                alt="project"
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover"
                }}
              />

              <div style={{
                padding: "25px"
              }}>

                <h3 style={{
                  color: "#facc15",
                  fontSize: "30px"
                }}>
                  Power BI Dashboard
                </h3>

                <p style={{
                  color: "#9ca3af",
                  lineHeight: "30px"
                }}>
                  Professional business intelligence dashboard.
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

{/* CONTACT */}

<section
  id="contact"
  style={{
    padding: isMobile ? "60px 20px" : "100px 80px",
    backgroundColor: "#0d0d0d",
    textAlign: "center"
  }}
>

  <h2 style={{
    fontSize: isMobile ? "50px" : "80px",
    marginBottom: "50px",
    fontWeight: "900"
  }}>
    CONTACT ME
  </h2>

  <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "35px",
    marginBottom: "40px",
    flexWrap: "wrap"
  }}>

    <a
      href="https://linkedin.com"
      target="_blank"
      rel="noreferrer"
    >
      <FaLinkedin size={45} color="#facc15" />
    </a>

    <a
      href="https://github.com"
      target="_blank"
      rel="noreferrer"
    >
      <FaGithub size={45} color="#facc15" />
    </a>

    <a
      href="https://instagram.com"
      target="_blank"
      rel="noreferrer"
    >
      <FaInstagram size={45} color="#facc15" />
    </a>

  </div>

  <a
    href="https://wa.me/919876543210"
    target="_blank"
    rel="noreferrer"
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      backgroundColor: "#25D366",
      color: "white",
      padding: "18px 40px",
      borderRadius: "14px",
      textDecoration: "none",
      fontWeight: "bold",
      fontSize: "22px"
    }}
  >

    <FaWhatsapp size={30} />

    Chat on WhatsApp

  </a>

</section>
</div>

)
}

export default App