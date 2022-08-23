const IPL=[
  {
    TeamA:{
      team:"MI",
      caption:"Rohit Sharma",
      finalScore:180,
      isWinner:true,
    },
      TeamB:{
        team:"CSK",
        caption:"MS Dhoni",
        finalScore:175,
        isWinner:false
      }
  },
  {
    TeamA:{
      team:"MI",
      caption:"Rohit Sharma",
      finalScore:180,
      isWinner:true,
    },
      TeamB:{
        team:"CSK",
        caption:"MS Dhoni",
        finalScore:175,
        isWinner:false
      }
  },
  {
    TeamA:{
      team:"MI",
      caption:"Rohit Sharma",
      finalScore:180,
      isWinner:true,
    },
      TeamB:{
        team:"CSK",
        caption:"MS Dhoni",
        finalScore:175,
        isWinner:false
      }
  },
  {
    TeamA:{
      team:"MI",
      caption:"Rohit Sharma",
      finalScore:180,
      isWinner:true,
    },
      TeamB:{
        team:"CSK",
        caption:"MS Dhoni",
        finalScore:175,
        isWinner:false
      }
  },
  {
    TeamA:{
      team:"MI",
      caption:"Rohit Sharma",
      finalScore:180,
      isWinner:true,
    },
      TeamB:{
        team:"CSK",
        caption:"MS Dhoni",
        finalScore:175,
        isWinner:false
      }
  },
]


const ul=window.document.createElement("ul")
for (let match of IPL){
  const {TeamA:MI,TeamB:CSK}=match;
  console.log(MI)
  console.log(CSK)
  const li=window.document.createElement("li")
  const{team:T1,finalScore:T1score}=MI;
  const{team:T2,finalScore:T2score}=CSK;
  const teamNames=`${T1} vs. ${T2}`
  const teamScores=`${T1score} ~ ${T2score}`

  li.innerHTML=` ${teamNames} --- ${teamScores}`
  ul.append(li)
}
document.body.append(ul)

