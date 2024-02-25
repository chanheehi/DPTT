// 페이지의 DOM이 로드된 후에 실행되는 코드
document.addEventListener("DOMContentLoaded", function() {
    DPTT = sessionStorage.getItem("DPTT");
    
    let typeImage = document.getElementById('type_Image');
    let typeName = document.getElementById('type_Name');
    let typeExplanation = document.getElementById('typeExplanation');
    
    // 유형명 바꾸기
    let textForDL = document.getElementById('textForDL');
    let textForIE = document.getElementById('textForIE');
    let textForRE = document.getElementById('textForRE');
    if (DPTT === "IDR") {
    typeImage.src = "image/IDR.jpg"
    typeName.textContent = "견생을 깨우친 요조숙녀";
    typeExplanation.textContent = "IDR 설명"
    textForIE.textContent = "의존적"
    textForDL.textContent = "내향적"
    textForRE.textContent = "이성적"
    }else if (DPTT === "IDE") {
    typeImage.src = "image/IDE.jpg"
    typeName.textContent = "아직은 수줍은 모험가";
    typeExplanation.textContent = "IDE 설명"
    textForIE.textContent = "의존적"
    textForDL.textContent = "내향적"
    textForRE.textContent = "감성적"
    }else if (DPTT === "ILR") {
    typeImage.src = "image/ILR.jpg"
    typeName.textContent = "주도면밀한 전략가";
    typeExplanation.textContent = "ILR 설명"
    textForIE.textContent = "주도적"
    textForDL.textContent = "내향적"
    textForRE.textContent = "이성적"
    }else if (DPTT === "ILE") {
    typeImage.src = "image/ILE.jpg"
    typeName.textContent = "못 말리는 사고뭉치";
    typeExplanation.textContent = "ILE 설명"
    textForIE.textContent = "주도적"
    textForDL.textContent = "내향적"
    textForRE.textContent = "감성적"
    }else if (DPTT === "EDR") {
    typeImage.src = "image/EDR.jpg"
    typeName.textContent = "견생 N회차 사교가";
    typeExplanation.textContent = "EDR 설명"
    textForIE.textContent = "의존적"
    textForDL.textContent = "외향적"
    textForRE.textContent = "이성적"
    }else if (DPTT === "EDE") {
    typeImage.src = "image/EDE.jpg"
    typeName.textContent = "뚜렷한 주관의 소유자";
    typeExplanation.textContent = "EDE 설명"
    textForIE.textContent = "의존적"
    textForDL.textContent = "외향적"
    textForRE.textContent = "감성적"
    }else if (DPTT === "ELR") {
    typeImage.src = "image/ELR.jpg"
    typeName.textContent = "꿈을 품은 지도자";
    typeExplanation.textContent = "ELR 설명"
    textForIE.textContent = "주도적"
    textForDL.textContent = "외향적"
    textForRE.textContent = "이성적"
    }else if (DPTT === "ELE") {
    typeImage.src = "image/ELE.jpg"
    typeName.textContent = "주도적인 갱얼쥐";
    typeExplanation.textContent = "ELE 설명"
    textForIE.textContent = "주도적"
    textForDL.textContent = "외향적"
    textForRE.textContent = "감성적"
    }


    // 성격 그래프 너비 바꾸기
    let introversion_extroversion = sessionStorage.getItem("introversion_extroversion");
    let dependence_leadership = sessionStorage.getItem("dependence_leadership");
    let rationality_emotionality = sessionStorage.getItem("rationality_emotionality");

    let scoreForIE = document.getElementById('scoreForIE');
    let scoreForDL = document.getElementById('scoreForDL');
    let scoreForRE = document.getElementById('scoreForRE');
    
    let graphForIE = document.getElementById('graphForIE');
    let graphForDL = document.getElementById('graphForDL');
    let graphForRE = document.getElementById('graphForRE');

    graphForIE.style.width = introversion_extroversion + '%'; // 새로운 너비를 적용합니다.
    graphForDL.style.width = dependence_leadership + '%';
    graphForRE.style.width = rationality_emotionality + '%';

    // 성격 그래프 텍스트 바꾸기
    scoreForIE.innerHTML = String(introversion_extroversion) + "%"
    scoreForDL.innerHTML = String(dependence_leadership) + "%"
    scoreForRE.innerHTML = String(rationality_emotionality) + "%"
});