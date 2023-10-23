import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useMessage } from "@/contexts/MessageContext";
import {motion} from 'framer-motion'
import Logo from '@/components/Logo'

const securityQuestions = [
  {
    question: "What is your opinion on what the acronym NMPD might signify to this website developer?",
    answers: ["National Missing Persons Database", "Non-Metallic Pipe Damage", "Network Management and Performance Diagnostics", "New Media Production and Design", "New Medicinal Product Development"],
    correctAnswer: "New Media Production and Design",
  },
  {
    question: "What do you believe is the most enjoyable course for NMPD students?",
    answers: ["Visual Communication", "Rich Media", "Production Company", "Business Communication",  "Web Communication"],
    correctAnswer: "Rich Media",
  },
  {
    question: "Who do you consider the most good-looking NMPD student?",
    answers: ["Banana", "Fish", "Jack", "Peter", "Tom"],
    correctAnswer: "Jack",
  },
];
const skyColor = {
  orange: [0xffc300, 0xff1f00, 0x2d00ff, 0xffebeb ],
  gray: [0x151516, 0x406872, 0xececed, 0xffebeb ],
  dodgerblue: [0xa4ff, 0xe1ff, 0xececed, 0xffebeb ],
}
const MAX_ATTEMPTS = 3;
const LOGIN_COOKIE_KEY = "login_attempts";

const Login = ({vantaEffect}) => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [attempts, setAttempts] = useState(1);
  const [failAttempts, setFailAttempts] = useState([0,0,0]); 
  const currentQuestion = securityQuestions[step - 1];
  const showMessage = useMessage();
  const [btnColor, setBtnColor] = useState('orange')
  // const changeHoverColor = (color) => {
  //   const buttons = document.getElementsByTagName('button');
  //   for (let i = 0; i < buttons.length; i++) {
  //     buttons[i].style.backgroundColor =  color ;
  //   }
  // };
  const changeColor = ( to) => {
    if (vantaEffect) {
      vantaEffect.setOptions({
        highlightColor: skyColor[to][0],
        midtoneColor: skyColor[to][1],
        lowlightColor: skyColor[to][2],
        baseColor: skyColor[to][3],
      })
    }
  }

  const changeSpeed = (speed) => {
    const pace = speed || '1'
    if (vantaEffect) {
      vantaEffect.setOptions({
        speed: pace,
      })
    }
  }
  const shuffleAnswers = (answers) => {
    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }
  };
  useEffect(() => {
    if (Cookies.get(LOGIN_COOKIE_KEY) == "deny") {
      // router.push("/denyaccess");
      router.push("/login");
    }
  }, []);
  useEffect(() => {
    if (step <= securityQuestions.length) {
      shuffleAnswers(currentQuestion.answers);
    }
  }, [step]);
  const handleAnswer = (answer, e) => {
    if (answer === currentQuestion.correctAnswer) {
      setBtnColor('dodgerblue')
      e.target.style.backgroundColor='dodgerblue'
      // changeColor('blue')
      if (step === securityQuestions.length) {
        // Set a login cookie that expires in 1 day
        Cookies.set(LOGIN_COOKIE_KEY, "true", { expires: 1 });
        router.push("/");;
      } else {
        setStep(step + 1);
      }
    } else {
      setBtnColor('gray')
      e.target.style.backgroundColor='gray'
      // changeColor('gray')
      setAttempts(attempts + 1);
      if (attempts >= MAX_ATTEMPTS) {
        // Set a deny cookie that expires in 1 day
        Cookies.set(LOGIN_COOKIE_KEY, "deny", { expires: 1 });
        // router.push("/denyaccess");
        router.reload();
      }
      // alert("Incorrect answer. Please try again.");
      // showMessage('Incorrect answer. Please try again.')
    }
    // e.target.style.backgroundColor=btnColor;
  };
  useEffect(() => {
    changeColor(btnColor)
  }, [btnColor])

  return (
    <motion.div className="flex min-h-screen w-screen"
      initial={{opacity: 0.2, x: -500}}
      animate={{opacity: 1, x: 0 }}
      transition={{delay: 0.8, duration: 1,ease: 'easeInOut'}}  
    >
      <div className="w-full max-w-[500px] md:w-1/2 bg-transparent opacity-100 flex flex-col items-center justify-center relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-gray-100 opacity-30 z-9"></div>
        <motion.h2 className="text-black-900 text-4xl m-4 font-semibold z-10"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 1.5, duration: 1, ease: 'easeInOut'}}
        >
          Welcome to News Portal
        </motion.h2>
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 2.2, duration: 2, ease: 'easeInOut'}}
          className="z-10"
        >
          {/* <motion.img className="max-w-[300px] mx-auto mb-4" src="newspaper-152320_640.png" alt="newspaper"
            initial={{scale: 3}}
            animate={{scale: 1}}
            transition={{delay: 2.2, duration: 1.5, ease: 'easeInOut'}}
          ></motion.img> */}
          <Logo input="black"/>
          {step <= securityQuestions.length ? (
            <motion.div className="w-full p-6 flex flex-col"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 2.8, duration: 1, ease: 'easeInOut'}}
            >
              <div className="h-full flex flex-col justify-even">
                <motion.h3 className={"text-bg-800 text-2xl  mb-2"}
                  initial={{y: 500}}
                  animate={{y: 0}}
                  transition={{delay: 3.2, duration: 1, ease: 'easeInOut'}}
                >
                  Security Question {step}
                </motion.h3>
                <motion.p className="text-black-600 text-xl  mb-4"
                  initial={{x: -500}}
                  animate={{x: 0}}
                  transition={{delay: 3.2, duration: 1, ease: 'easeInOut'}}
                >
                  {currentQuestion.question}
                </motion.p>
                <div className="space-y-4 text-black-500">
                  {currentQuestion.answers.map((answer, index) => (
                    <motion.button
                      key={index}
                      className={`w-full p-2 bg-white text-md text-gray-700 border-gray-300 rounded  hover:bg-orange-500 hover:text-white shadow-lg`}
                      onClick={(e) => {handleAnswer(answer,e);}}
                      onMouseOver={(e) => {changeSpeed('13'); e.target.style.backgroundColor=btnColor}}
                      onMouseLeave={(e) => {changeSpeed('2'); e.target.style.backgroundColor='white'}}
                      // initial={{opacity: 0}}
                      // initial={{x: -30}}
                      // animate={{x: 0}}
                      whileInView={{x: [0, -25, 25, 0], y: [0, -25, 25, 0], opacity: [0, 0.25, 0.75, 1]}}
                      transition={{delay: 3.5 + (index/20), duration: 1.3, loop: Infinity}}
                      >
                        {answer}
                    </motion.button>
                  ))}
                </div>
                <div className="flex flex-row justify-center items-center mt-8">
                  {failAttempts.map((failAttempt, index) => (
                    <div
                      key={index}
                      className={`w-4 h-4 rounded-full inline-block mr-8 ${
                        index < attempts - 1  ? "bg-orange-600" : "bg-gray-300"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="absolute top-0 left-0 w-full h-full p-6 flex flex-col justify-center items-center">
              <p className="text-2xl text-green-500">Authentication successful. Redirecting...</p>
            </div>
          )}
        </motion.div>
      </div>
      {/* <div className="w-0 md:w-1/2 bg-white"></div> */}
    </motion.div>
  );
};

export default Login;
