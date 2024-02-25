// 결과를 위한 점수 계산
let introversion_extroversion = 50;
let dependence_leadership = 50;
let rationality_emotionality = 50;
let personalities = ['introversion_extroversion', 'dependence_leadership', 'rationality_emotionality','introversion_extroversion', 'dependence_leadership', 'rationality_emotionality'];
let character = [], characterScore = [];
let DPTT = ''
let progressBar = document.getElementById("progressBar");

// 시작버튼 누르면, 영역 표시 및 스크롤 내리기
function showHiddenArea() {
  let hiddenArea = document.getElementById("test_sheet0");
  let mainForm = document.getElementById("mainForm");
  progressBar.style.display = "block";  // 숨겨진 영역을 표시
  mainForm.style.display = "block";  // 숨겨진 영역을 표시
  hiddenArea.style.display = "block";
  let start_btn = document.getElementById('start_btn');
  start_btn.style.display = 'none';

  // 숨겨진 영역이 표시된 후 해당 영역으로 스크롤
  mainForm.scrollIntoView({
    behavior: 'smooth', // 부드러운 스크롤 효과 적용
    block: 'start' // 시작 부분에 스크롤
  });
}

function clickTest() {
  // 원하는 URL로 이동
  window.location.href = "main.html";
}
function clickType() {
  // 원하는 URL로 이동
  window.location.href = "type.html";
}

function clickLogo() {
  window.location.href = "main.html";
}


function testingResult() {
  for (let i = 0; i < character.length; i++) {
    if ((character[i]==0) || (character[i]==3)) {
      introversion_extroversion += characterScore[i]
    }else if ((character[i]==1) || (character[i]==4)) {
      dependence_leadership += characterScore[i]
    }else if ((character[i]==2) || (character[i]==5)) {
      rationality_emotionality += characterScore[i]
    }
  }

  // 성향 확정짓기
  if (introversion_extroversion < 51) {
    DPTT += 'I'
    introversion_extroversion = 100-introversion_extroversion
  }else { DPTT += 'E'}
  if (dependence_leadership < 51) {
    DPTT += 'D'
    dependence_leadership = 100-dependence_leadership
  }else { DPTT += 'L'}
  if (rationality_emotionality < 51) {
    DPTT += 'R'
    rationality_emotionality = 100-rationality_emotionality
  }else { DPTT += 'E'}

}

function CalculateScore(i) {
  switch (i) {
    case 0:
      return -5;
    case 1:
      return -3;
    case 2:
      return -1.5;
    case 3:
      return 0;
    case 4:
      return 1.5;
    case 5:
      return 3;
    case 6:
      return 5;
  }
}

// Next 버튼 누르면, Radio가 모두 체크되어 있는지 확인
function checkRadioButtons0() {
  let sheet = document.getElementById("test_sheet0");
  let groups = sheet.querySelectorAll('fieldset');
  let isChecked = true
  let characterTemp = []
  let characterScoreTemp = []

  for (let i = 0; i < groups.length; i++) {
    let radios = groups[i].querySelectorAll('input[type="radio"]');

    for (let j = 0; j < radios.length; j++) {
      if (radios[j].checked){
        characterTemp.push(i);
        characterScoreTemp.push(CalculateScore(j));
        break;
      }
      if (((radios[j].checked) === false) && (j === (radios.length-1))) {
        isChecked = false;
      }
    }
  }

  if (isChecked) {
    // 진행률 프로그래스 바
    let progressWidth = document.getElementById('progress');
    let progressText = document.getElementById('progressText');
    let currentWidth = parseFloat(progressWidth.style.width) || 0; // 현재 너비를 가져옵니다. 없으면 0으로 설정합니다.
    let newWidth = currentWidth + 25; // 증가시킬 너비를 설정합니다.
    progressWidth.style.width = newWidth + '%'; // 새로운 너비를 적용합니다.
    progressText.textContent = newWidth + '%'; // 진행률 텍스트를 업데이트합니다.

    // 점수 계산
    character = character.concat(characterTemp)
    characterScore = characterScore.concat(characterScoreTemp)
    sheet.style.display = "none";
    let hiddenArea = document.getElementById("test_sheet1");
    hiddenArea.style.display = "block"; // 숨겨진 영역을 표시
    progressBar.scrollIntoView({
      behavior: 'smooth', // 부드러운 스크롤 효과 적용
      block: 'start' // 시작 부분에 스크롤
    });
  } else {
    alert('모든 항목을 체크해주세요 !');
  }
}



function checkRadioButtons1() {
  let sheet = document.getElementById("test_sheet1");
  let groups = sheet.querySelectorAll('fieldset');
  let isChecked = true
  let characterTemp = []
  let characterScoreTemp = []

  for (let i = 0; i < groups.length; i++) {
    let radios = groups[i].querySelectorAll('input[type="radio"]');

    for (let j = 0; j < radios.length; j++) {
      if (radios[j].checked){
        characterTemp.push(i);
        characterScoreTemp.push(CalculateScore(j));
        break;
      }
      if (((radios[j].checked) === false) && (j === (radios.length-1))) {
        isChecked = false;
      }
    }
  }

  if (isChecked) {
    // 진행률 프로그래스 바
    let progressWidth = document.getElementById('progress');
    let progressText = document.getElementById('progressText');
    let currentWidth = parseFloat(progressWidth.style.width) || 0; // 현재 너비를 가져옵니다. 없으면 0으로 설정합니다.
    let newWidth = currentWidth + 25; // 증가시킬 너비를 설정합니다. 여기서는 10씩 증가하도록 합니다.
    progressWidth.style.width = newWidth + '%'; // 새로운 너비를 적용합니다.
    progressText.textContent = newWidth + '%'; // 진행률 텍스트를 업데이트합니다.
    
    // 점수 계산
    character = character.concat(characterTemp)
    characterScore = characterScore.concat(characterScoreTemp)
    sheet.style.display = "none";
    let hiddenArea = document.getElementById("test_sheet2");
    hiddenArea.style.display = "block"; // 숨겨진 영역을 표시
    progressBar.scrollIntoView({
      behavior: 'smooth', // 부드러운 스크롤 효과 적용
      block: 'start' // 시작 부분에 스크롤
    });
  } else {
    alert('모든 항목을 체크해주세요 !');
  }
}

function checkRadioButtons2() {
  let sheet = document.getElementById("test_sheet2");
  let groups = sheet.querySelectorAll('fieldset');
  let isChecked = true
  let characterTemp = []
  let characterScoreTemp = []

  for (let i = 0; i < groups.length; i++) {
    let radios = groups[i].querySelectorAll('input[type="radio"]');

    for (let j = 0; j < radios.length; j++) {
      if (radios[j].checked){
        characterTemp.push(i);
        characterScoreTemp.push(CalculateScore(j));
        break;
      }
      if (((radios[j].checked) === false) && (j === (radios.length-1))) {
        isChecked = false;
      }
    }
  }

  if (isChecked) {
    // 진행률 프로그래스 바
    let progressWidth = document.getElementById('progress');
    let progressText = document.getElementById('progressText');
    let currentWidth = parseFloat(progressWidth.style.width) || 0; // 현재 너비를 가져옵니다. 없으면 0으로 설정합니다.
    let newWidth = currentWidth + 25; // 증가시킬 너비를 설정합니다. 여기서는 10씩 증가하도록 합니다.
    progressWidth.style.width = newWidth + '%'; // 새로운 너비를 적용합니다.
    progressText.textContent = newWidth + '%'; // 진행률 텍스트를 업데이트합니다.
    
    // 점수 계산
    character = character.concat(characterTemp)
    characterScore = characterScore.concat(characterScoreTemp)
    sheet.style.display = "none";
    let hiddenArea = document.getElementById("test_sheet3");
    hiddenArea.style.display = "block"; // 숨겨진 영역을 표시
    progressBar.scrollIntoView({
      behavior: 'smooth', // 부드러운 스크롤 효과 적용
      block: 'start' // 시작 부분에 스크롤
    });
  } else {
    alert('모든 항목을 체크해주세요 !');
  }
}
  
function resultRadioButton() {
  let sheet = document.getElementById("test_sheet3");
  let groups = sheet.querySelectorAll('fieldset');
  let isChecked = true
  let characterTemp = []
  let characterScoreTemp = []

  for (let i = 0; i < groups.length; i++) {
    let radios = groups[i].querySelectorAll('input[type="radio"]');

    for (let j = 0; j < radios.length; j++) {
      if (radios[j].checked){
        characterTemp.push(i);
        characterScoreTemp.push(CalculateScore(j));
        break;
      }
      if (((radios[j].checked) === false) && (j === (radios.length-1))) {
        isChecked = false;
      }
    }
  }

  if (isChecked) {
    character = character.concat(characterTemp)
    characterScore = characterScore.concat(characterScoreTemp)
    testingResult()
    sessionStorage.setItem("DPTT", DPTT);
    sessionStorage.setItem("introversion_extroversion", introversion_extroversion);
    sessionStorage.setItem("dependence_leadership", dependence_leadership);
    sessionStorage.setItem("rationality_emotionality", rationality_emotionality);
    window.location.href = 'result.html';
  } else {
    alert('모든 항목을 체크해주세요 !');
  }
}



