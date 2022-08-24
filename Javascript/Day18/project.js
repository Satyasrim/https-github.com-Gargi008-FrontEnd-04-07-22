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
      finalScore:150,
      isWinner:false,
    },
      TeamB:{
        team:"CSK",
        caption:"MS Dhoni",
        finalScore:175,
        isWinner:true,
      }
  },
  {
    TeamA:{
      team:"MI",
      caption:"Rohit Sharma",
      finalScore:146,
      isWinner:false,
    },
      TeamB:{
        team:"CSK",
        caption:"MS Dhoni",
        finalScore:155,
        isWinner:true
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
        finalScore:155,
        isWinner:false
      }
  },
  {
    TeamA:{
      team:"MI",
      caption:"Rohit Sharma",
      finalScore:185,
      isWinner:false,
    },
      TeamB:{
        team:"CSK",
        caption:"MS Dhoni",
        finalScore:195,
        isWinner:true
      }
  },
]


const ul=window.document.createElement("ul")
for (let match of IPL){
  const {TeamA:Team1,TeamB:Team2}=match; //object destructuring
/*   console.log(MI)
  console.log(CSK) */
  const li=window.document.createElement("li")
  const{team:T1,finalScore:T1score}=Team1;
  const{team:T2,finalScore:T2score}=Team2;
  const teamNames=`${T1} vs. ${T2}`

  if(T1score>T2score){
    teamScores=`<b>${T1score}</b> ~ ${T2score}`
  }else{
     teamScores=`${T1score} ~ <b>${T2score}</b>`
  }
  const myFavTeam= T2==="CSK" ? Team2 : Team1
  li.classList.add(myFavTeam.isWinner? "winningTeam" : "losingTeam")



  li.innerHTML=` ${teamNames} --- ${teamScores}`
  ul.append(li)
}
document.body.append(ul)

