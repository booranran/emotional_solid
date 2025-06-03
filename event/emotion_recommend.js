


document.addEventListener('DOMContentLoaded', () => {
  // 기존 코드 다 여기로 옮겨
    console.log("✅ JS 실행됨");


    window.onload = function () {

    const params = new URLSearchParams(window.location.search);
    const emotion = params.get("emotion");
    console.log("emotion 값: ", emotion);

    const resultData = {
    설렘체:{
        icon: 'emotion/flutter_buttons/flat_icon.png',
        wholebg: "emotion/flutter_buttons/whole_background.png",
        bg: 'event/bg/flutter_bg.png',
        highlightColor: "#FF94B6",
        title: '심장박동처럼 두근거리는 감정, 설렘체',
        detail:`  
            지금의 당신은 내면에 반짝이는 기대를 품고 있어요.<br>
            불안과 안정 사이를 오가면서도, 여전히 어떤 가능성을 향해 열려 있죠.<br>
            설렘체는 미세하게 번져나가는 감정의 입자를 시각화한 물성입니다.<br>
            <br>
            설렘체는 두근거리는 심장 박동에서 아이디어를 착안한 감정의 물성입니다.<br>
            하트 모양의 감정은 매끄럽고 윤기나며, 미세한 입자가 모였다 흩어지는 흐름을 가집니다.<br>
            전체적으로 높은 채도의 색이 가장자리를 따라 밝게 퍼지며, <br>
            순간적으로 밝아지는 파동이 특징입니다.
        `,
        match: '설렘체와 잘 어울리는 감정 추천',
        detail2: `  
            부드럽고 따뜻한 색으로 반짝이는 감정, 유동적이고 부드러운 움직임을 가진 <span class="highlight-word">‘설렘체’</span> <br>
            지금 이 감정을 유지하고 싶은 당신을 위해 딱 맞는 컬렉션을 추천해드려요!
        `,
        overlayIcon: 'emotion/flutter_front.png',
    },

    행복체:{
        icon: 'emotion/happiness/flat_icon.png',
        bg: 'event/bg/happiness_bg.png',
        highlightColor: "#FFDD54",
        title: '따스한 온도로 퍼져나가는 감정, 행복체',
        detail:`  
            당신은 지금, 특별한 이유 없이 웃을 수 있는 상태에 있어요.<br>
            작은 것에서 기쁨을 느끼고, 몸과 마음이 동시에 가벼워지는 그 느낌.<br>
            행복체는 가장 순수하고 충만한 감정의 물성을 응축한 형태입니다.<br>
            <br>
            행복체는 꽃이 만개하는 모양으로부터 기인한 감정의 물성입니다.<br>
            형태는 부드럽고 포근한 곡선으로 이루어지며, 내부에서 은은한 광이 퍼져 나옵니다.<br>
            밝고 긍정적인 노란 빛깔이 자연스럽게 그라데이션을 이루며, <br>
            따스한 빛을 머금은 듯한 질감을 가집니다.
        `,
        match: '행복체와 잘 어울리는 감정 추천',
        detail2: `  
            포근하고 유쾌한 진동, 보는 것만으로 마음을 감싸주는 <span class="highlight-word">‘행복체’</span> <br>
            지금 이 감정을 유지하고 싶은 당신을 위해 딱 맞는 컬렉션을 추천해드려요!
        `,
        overlayIcon: 'emotion/happiness/happiness_icon.png',
    },

    편안체:{
        icon: 'emotion/relex/flat_icon.png',
        bg: 'event/bg/relex_bg.png',
        highlightColor: "#56CFAC",
        title: '포근하게 나를 감싸는 감정, 편안체',
        detail:`  
            지금의 당신은 모든 것이 잠시 멈춘 듯한 상태에 가까워요.<br>
            긴장이 풀리고, 안과 밖의 경계가 흐려지며 조용한 평온이 깃들고 있죠.<br>
            편안체는 안정된 리듬과 무게 중심으로 감정을 가라앉히는 물성입니다.<br>
            <br>
            편안체는 구름처럼 포근한 형태를 가진 감정의 물성입니다.<br>
            둥근 곡선이 반복되는 형태를 가졌으며, 일정한 속도로 천천히 유영하며 <br>
            느린 호흡을 닮은 그라디언트를 보여줍니다.<br>
            전체적으로 저채도의 색감에 잔잔한 빛의 움직임이 더해져 안정적인 리듬을 느끼게 합니다.
        `,
        match: '편안체와 잘 어울리는 감정 추천',
        detail2: `  
            느리게 스며드는 안온함, 깊이 숨 쉬게 만드는 차분함을 가진<span class="highlight-word">‘편안체’</span> <br>
            지금 이 감정을 유지하고 싶은 당신을 위해 딱 맞는 컬렉션을 추천해드려요!
        `,
        overlayIcon: 'emotion/relex/relex_icon.png',
    },

    영감체:{
        icon: 'emotion/inspire/flat_icon.png',
        bg: 'event/bg/inspire_bg.png',
        highlightColor: "#B390FF",
        title: '빛처럼 번쩍이며 발산하는 감정, 영감체',
        detail:`  
            당신의 내면은 지금, 어디선가 온 신호를 포착했어요.<br>
            논리를 넘어선 상상, 직선 대신 불규칙한 파동이 감각을 열어젖히고 있죠.<br>
            영감체는 예측할 수 없는 창조의 순간을 포착한 감정의 물성입니다.<br>
            <br>
            영감체는 내면에서 터져나오는 밝고 찬란한 빛의 모양을 가진 감정의 물성입니다.<br>
            형태는 사선으로 뻗어나가며, 다양한 빛깔의 색상이 끊임없이 움직이며<br>
            새로운 형태를 만들어냅니다.<br>
            선명한 색이 공간 속을 빠르게 질주하며, 불규칙하지만 조화로운 광채를 만들어냅니다.
        `,
        match: '영감체와 잘 어울리는 감정 추천',
        detail2: `  
            느직관과 상상이 교차하는 찰나, 무언가 태어나려는 순간의 진동을 가진<span class="highlight-word">‘영감체’</span> <br>
            지금 이 감정을 유지하고 싶은 당신을 위해 딱 맞는 컬렉션을 추천해드려요!
        `,
        overlayIcon: 'emotion/inspire/inspire_icon.png',
    },

    고요체:{
        icon: 'emotion/silence/flat_icon.png',
        bg: 'event/bg/silence_bg.png',
        highlightColor: "#78BFFE",
        title: '차분하면서도 동요하지 않는 감정, 고요체',
        detail:`  
            지금의 당신은 내면의 소음을 잠재우고, 아주 깊은 숨을 들이쉬는 중이에요.<br>
            세상의 속도에 휩쓸리기보단, 멈춰 선 공간 속에서 스스로를 감각하고 있죠.<br>
            고요체는 고요함이란 감정의 결을 시각화한 물성입니다.<br>
            <br>
            고요체는 무소음의 우주 속 달을 연상시키게 하는 감정의 물성입니다.<br>
            둥근 반구의 형태는 흔들림 없는 수면처럼 평평하고 정제되어 있으며, <br>
            기울지 않는 균형감을 가집니다.<br>
            전체적으로 균일한 톤으로 절제된 색상이 은은하게 흐르고, 빛의 반응은 느리게 확산됩니다.
        `,
        match: '고요체와 잘 어울리는 감정 추천',
        detail2: `  
            차분하고 시원한 색으로 반짝이는 감정, 정적이고 부드러운 흐름을 가진<span class="highlight-word">‘고요체’</span> <br>
            지금 이 감정을 유지하고 싶은 당신을 위해 딱 맞는 컬렉션을 추천해드려요!
        `,
        overlayIcon: 'emotion/silence/silence_icon.png',
    },

    예민체:{
        icon: 'emotion/sensitive/flat_icon.png',
        bg: 'event/bg/sensitive_bg.png',
        highlightColor: "#77CA93",
        title: '남들보다 독특하고 섬세한 감정, 예민체',
        detail:`  
            지금의 당신은 외부 자극에 빠르게 반응하는 민감한 상태에 있어요.<br>
            주변의 모든 소리와 기류, 시선까지도 감지하며 날카로운 촉각을 곤두세우고 있죠.<br>
            예민체는 극도로 예민한 감각을 시각화한, 섬세하고 날카로운 감정의 물성입니다.<br>
            <br>
            예민체는 날카로운 감정을 사방으로 뻗어나가는 모양으로 구현한 감정의 물성입니다.<br>
            날선 형태의 감정에서는 미묘한 진동이 끊임없이 교차합니다.<br>
            전체적으로 오묘하게 움직이는 색채와 순간적으로 번쩍이는 빛의 반응이 특징입니다.
        `,
        match: '예민체와 잘 어울리는 감정 추천',
        detail2: `  
            보이지 않는 감정의 움직임을 감지하고, 무언가 곧 터질 것 같은 긴장감을 품은 <span class="highlight-word">‘예민체’</span> <br>
            지금 이 감정을 유지하고 싶은 당신을 위해 딱 맞는 컬렉션을 추천해드려요!
        `,
        overlayIcon: 'emotion/sensitive/sensitive_icon.png',
    },

    침착체:{
        icon: 'emotion/calmness/flat_icon.png',
        bg: 'event/bg/calmness_bg.png',
        highlightColor: "#78B2FE",
        title: '내면에 고요한 흐름을 가진 감정, 침착체',
        detail:`  
            당신은 지금 외부의 동요에도 흔들리지 않는 단단한 중심을 유지하고 있어요.<br>
            사건이 일어나더라도 그 안에서 천천히 숨을 고르며, 묵직한 안정감을 지니고 있죠.<br>
            침착체는 감정의 표면을 정리하고 안으로 가라앉히는 물성입니다.<br>
            <br>
            침착체는 격정의 한가운데서도 흐트러지지 않는 중심을 가진 감정의 물성입니다.<br>
            형태는 단단한 조약돌과 같이 매끄럽고, 흐릿한 경계 속에 유연함을 품고 있습니다.<br>
            차가운 느낌의 차분한 색이 균일하게 분포되고, 일정한 속도의 광택이 표면을 감돕니다.
        `,
        match: '침착체와 잘 어울리는 감정 추천',
        detail2: `  
            급하지 않고, 흔들림 없는 단단한 존재감을 지닌 <span class="highlight-word">‘침착체’</span> <br>
            지금 이 감정을 유지하고 싶은 당신을 위해 딱 맞는 컬렉션을 추천해드려요!
        `,
        overlayIcon: 'emotion/calmness/calmness_icon.png',
    },

    집중체:{
        icon: 'emotion/focus/flat_icon.png',
        bg: 'event/bg/focus_bg.png',
        highlightColor: "#9FCD33",
        title: '한 지점을 향해 쏟아내는 감정, 집중체',
        detail:`  
            당지금의 당신은 주변의 소음을 차단하고 하나의 대상에 몰입하고 있어요.<br>
            머릿속이 정리되고, 불필요한 감각은 꺼진 채 목적을 향해 시선이 수렴되고 있죠.<br>
            집중체는 내면의 흐름을 한 방향으로 수렴시키는 감정의 물성입니다.<br>
            <br>
            집중체는 모든 것이 하나의 점 안으로 수렴하는 밀도 높은 감정의 물성입니다.<br>
            형태는 수직적으로 정렬된 구조와, 안쪽으로 빨려 들어가는 특이한 구조를 가졌습니다.<br>
            다채로우나 은은한 색상이 강하게 수축되며, <br>
            시선을 한 지점으로 이끄는 빛의 응집이 일어납니다.
        `,
        match: '집중체와 잘 어울리는 감정 추천',
        detail2: `  
            산만한 감각을 정리하고, 나아갈 목표를 향해 초점을 맞추는 <span class="highlight-word">‘집중체’</span> <br>
            지금 이 감정을 유지하고 싶은 당신을 위해 딱 맞는 컬렉션을 추천해드려요!
        `,
        overlayIcon: 'emotion/focus/focus_icon.png',
    },

    공허체:{
        icon: 'emotion/void/flat_icon.png',
        bg: 'event/bg/void_bg.png',
        highlightColor: "#7D66FF",
        title: '텅 빈 채로 외로운 감정, 공허체',
        detail:`  
            지금의 당신은 무언가 빠져나간 자리에 조용한 틈을 안고 있어요.<br>
            감정은 움직이지 않고, 무력한 듯 맴돌며 어떤 것도 마음을 채우지 못하죠.<br>
            공허체는 감정의 부재, 혹은 사라진 감각을 시각화한 무중력의 물성입니다.<br>
            <br>
            공허체는 명왕성처럼 홀로 남겨진 듯한 원형을 가진 감정의 물성입니다.<br>
            형태는 안에서부터 비워진 듯한 이중 구조로 이루어지며,  중심으로 갈수록 색이 옅어집니다.<br>
            빛이 스며들지만 끝내 통과하지 않고, 그 안에 머물며 정지한 듯한 투명함을 가집니다.
        `,
        match: '공허체와 잘 어울리는 감정 추천',
        detail2: `  
            산만한 감각을 정리하고, 나아갈 목표를 향해 초점을 맞추는 <span class="highlight-word">‘공허체’</span> <br>
            지금 이 감정을 유지하고 싶은 당신을 위해 딱 맞는 컬렉션을 추천해드려요!
        `,
        overlayIcon: 'emotion/void/void_icon.png',
    },

    공포체:{
        icon: 'emotion/fear/flat_icon.png',
        bg: 'event/bg/fear_bg.png',
        highlightColor: "#A83CD7",
        title: '오싹거리며 소름이 돋는 감정, 공포체',
        detail:`  
            지금의 당신은 눈앞의 현실이 낯설고, 설명할 수 없는 두려움에 잠식되고 있어요.<br>
            작은 소리에도 깜짝 놀라고, 마치 무언가가 곁에 있는 듯한 긴장감이 감돌죠.<br>
            공포체는 눈에 보이지 않는 위협을 감각으로 받아들이는 감정의 물성입니다.<br>
            <br>
            공포체는 우리를 바라보는 시선으로부터 기인한 감정의 물성입니다.<br>
            눈 모양을 가진 형태는 정형화되지 않았고, 급작스럽게 확장되거나 수축합니다.<br>
            스펙트럼처럼 다채로운 색감에서 갑작스러운 명도 대비가 나타나며, <br>
            반사보다 흡수에 가까운 질감을 지닙니다.
        `,
        detail2: `  
            정체 모를 불안과 예측할 수 없는 공포를 응축한 <span class="highlight-word">‘공포체’</span> <br>
            지금 이 감정을 유지하고 싶은 당신을 위해 딱 맞는 컬렉션을 추천해드려요!
        `,
        overlayIcon: 'emotion/fear/fear_icon.png',
    },

    우울체:{
        icon: 'emotion/blue/flat_icon.png',
        bg: 'event/bg/blue_bg.png',
        highlightColor: "#5E78E8",
        title: '심해 속으로 깊이 가라앉는 감정, 우울체',
        detail:`  
            당신은 지금 마음속에서 천천히 가라앉는 감정을 느끼고 있어요.<br>
            기분은 무겁고, 이유 없는 무기력과 슬픔이 하루의 리듬을 잠식하고 있죠.<br>
            우울체는 말로 설명되지 않는 감정의 먹먹함을 시각화한 물성입니다.<br>
            <br>
            우울체는 눈물이 떨어지는 모양에서 기인한 감정의 물성입니다.<br>
            형태는 조약돌같이 매끄럽고 둥글며, 경계가 흐릿하고 낮은 채도의 색감이 특징입니다.<br>
            전체적으로 깊은 바닷속처럼 푸른 색감과 무른 질감을 가지고 있습니다.
        `,
        detail2: `  
            정어디선가 조용히 스며든 감정을 가만히 들여다보는 <span class="highlight-word">‘우울체’</span> <br>
            지금 이 감정을 유지하고 싶은 당신을 위해 딱 맞는 컬렉션을 추천해드려요!
        `,
        overlayIcon: 'emotion/blue/blue_icon.png',
    },

    불안체:{
        icon: 'emotion/anxiety/flat_icon.png',
        bg: 'event/bg/anxiety_bg.png',
        highlightColor: "#E57CFF",
        title: '흔들리며 위태로운 감정, 불안체',
        detail:`  
            당신은 지금 정해지지 않은 미래, 혹은 다가올 무언가에 대해 계속 긴장하고 있어요.<br>
            가슴 한구석이 먹먹하고, 사소한 자극에도 쉽게 뒤흔들리죠.<br>
            불안체는 감정의 진폭이 크고 예측할 수 없는 상태를 시각화한 물성입니다.<br>
            <br>
            불안체는 식은땀이 떨어져 흔들리는 물방울의 모양을 가진 감정의 물성입니다. <br>
            형태는 끊임없이 진동하며 가장자리가 불규칙하게 흔들리고, <br>
            내부는 미세한 입자로 구성되어 있습니다.<br>
            불균형한 색감과 표면은 일시적으로 번들거리다 곧 다시 탁해지는 변화무쌍한 속성을 가집니다.
        `,
        detail2: `  
            불편함과 긴장의 경계에 서 있는 <span class="highlight-word">‘불안체’</span> <br>
            지금 이 감정을 유지하고 싶은 당신을 위해 딱 맞는 컬렉션을 추천해드려요!
        `,
        overlayIcon: 'emotion/anxiety/anxiety_icon.png',
    },


    증오체:{
        icon: 'emotion/hate/flat_icon.png',
        bg: 'event/bg/hate_bg.png',
        highlightColor: "#FFBB3E",
        title: '단 하나를 향해 타오르는 감정, 증오체',
        detail:`  
            지금의 당신은 강한 반감과 거부감이 내면을 뜨겁게 잠식하고 있어요.<br>
            표면은 평온해 보여도, 안쪽 깊은 곳에서는 타오르는 불쾌감이 자라고 있죠.<br>
            증오체는 통제된 분노와 깊은 적의가 응축된, 정제된 감정의 물성입니다.<br>
            <br>
            증오체는 한 사람을 향한 날카롭고 응축된 감정의 모습을 표현한 감정의 물성입니다.<br>
            내부에 축적된 감정이 날카롭게 발현되는 형태로, 난반사하는 표면, <br>
            쨍하고 어지러운 색감이 특징입니다.<br>
            중심에서 흐르는 불균형한 광택이 이 감정의 일그러진 집착을 드러냅니다.
        `,
        detail2: `  
            차갑고도 뜨거운, 양극단의 감정이 공존하는 감정 <span class="highlight-word">‘증오체’</span> <br>
            지금 이 감정을 유지하고 싶은 당신을 위해 딱 맞는 컬렉션을 추천해드려요!
        `,
        overlayIcon: 'emotion/hate/hate_icon.png',
    },

    분노체:{
        icon: 'emotion/anger/flat_icon.png',
        bg: 'event/bg/anger_bg.png',
        highlightColor: "#FF6E3A",
        title: '폭발하듯 끓어오르는 감정, 분노체',
        detail:`  
            지금의 당신은 참을 수 없는 상황 속에서 한계점에 가까워지고 있어요.<br>
            작은 자극에도 격렬하게 반응하고, 그 감정은 쉽게 식지 않죠.<br>
            분노체는 순간적으로 터져나오는 강한 에너지와 격한 감정을 응축한 물성입니다.<br>
            <br>
            분노체는 급작스럽고 폭발적인 불꽃의 모양을 닮은 감정의 물성입니다.<br>
            팽창한 중심과 날카로운 돌출부, 선명한 고채도 색상이 특징이며, <br>
            표면은 반투명하지만 내부는 불투명하여, 감정의 뿌리가 보이지 않아 <br>
            더욱 위협적으로 느껴집니다.
        `,
        detail2: `  
            폭발적인 감정이 지나간 자리에서 진짜 감정을 마주하게 되는 <span class="highlight-word">‘분노체’</span> <br>
            지금 이 감정을 유지하고 싶은 당신을 위해 딱 맞는 컬렉션을 추천해드려요!
        `,
        overlayIcon: 'emotion/anger/anger_icon.png',
    },

    짜증체:{
        icon: 'emotion/irritation/flat_icon.png',
        bg: 'event/bg/irritation_bg.png',
        highlightColor: "#FF5AAC",
        title: '삐죽삐죽 가시가 돋은 감정, 짜증체',
        detail:`  
            지금의 당신은 반복되는 불쾌한 자극에 예민해진 상태예요.<br>
            작은 일에도 신경이 곤두서고, 마음 깊숙한 곳에서 답답함이 차오르죠.<br>
            짜증체는 사소한 자극이 축적되어 만들어내는 감정의 진동을 시각화한 물성입니다.<br>
            <br>
            짜증체는 끊임없이 작은 자극에 반응하는 미세한 진동을 담아낸 감정의 물성입니다.<br>
            불규칙적으로 일그러진 외곽과 빠르게 변화하는 색의 결이 특징이며, <br>
            중심부에서 돌출된 자잘한 돌기가 감정을 더욱 증폭시킵니다.
        `,
        detail2: `  
            언제 터질지 모를 불균형의 감정, 그러나 여전히 표현되지 않은 <span class="highlight-word">‘짜증체’</span> <br>
            지금 이 감정을 유지하고 싶은 당신을 위해 딱 맞는 컬렉션을 추천해드려요!
        `,
        overlayIcon: 'emotion/irritation/irritation_icon.png',
    },

    갈등체:{
        icon: 'emotion/discord/flat_icon.png',
        bg: 'event/bg/discord_bg.png',
        highlightColor: "#FF56DD",
        title: '양 옆에서 격렬하게 부딪하는 감정, 갈등체',
        detail:`  
            지금의 당신은 두 가지 이상의 마음 사이에서 균형을 잃고 있어요.<br>
            결정하지 못한 채 멈춰 서 있고, 그 안에서 스스로를 계속 되묻고 있죠.<br>
            갈등체는 서로 다른 방향의 감정이 동시에 존재하는 내면의 균열을 물성화한 감정입니다.<br>
            <br>
            갈등체는 서로 다른 두 감정이 밀어내고 당기는 모습을 담아낸 감정의 물성입니다.<br>
            서로 반대되는 색이 끊임없이 교차하고, 매끄러움과 거침이 공존하는 표면은 <br>
            내적 충돌을 그대로 드러냅니다.<br>
            균형을 이루지 못한 형태는 중심을 잃은 채 기울어져 있습니다.
        `,
        detail2: `  
            자기 안의 두 목소리가 충돌하는 <span class="highlight-word">‘갈등체’</span> <br>
            지금 이 감정을 유지하고 싶은 당신을 위해 딱 맞는 컬렉션을 추천해드려요!
        `,
        overlayIcon: 'emotion/discord/discord_icon.png',
    },

};

    
    const emotionRelations = {

        설렘체: {
        similar: [
          { name: '행복', icon: 'emotion/happiness/happiness_icon.png', color: '#FFFBCA' },
          { name: '예민', icon: 'emotion/sensitive/sensitive_icon.png', color: '#E4FFED' }
        ],
        different: [
          { name: '불안', icon: 'emotion/anxiety/anxiety_icon2.png', color: '#EBC9FF' },
          { name: '갈등', icon: 'emotion/discord/discord_icon.png', color: '#FFDBDC' }
        ]
      },

      행복체: {
        similar: [
          { name: '설렘', icon: 'emotion/flutter_front.png', color: '#FFDBF2' },
          { name: '편안', icon: 'emotion/relex/relex_icon.png', color: '#C6FFEE' }
        ],
        different: [
          { name: '불안', icon: 'emotion/anxiety/anxiety_icon2.png', color: '#EBC9FF' },
          { name: '공포', icon: 'emotion/fear/fear_icon.png', color: '#9F96FF' }
        ]
      },

      편안체: {
        similar: [
          { name: '고요', icon: 'emotion/silence/silence_icon.png', color: '#D7E7FF' },
          { name: '침착', icon: 'emotion/calmness/calmness_icon.png', color: '#CAFCFF' }
        ],
        different: [
          { name: '예민', icon: 'emotion/sensitive/sensitive_icon.png', color: '#E4FFED' },
          { name: '짜증', icon: 'emotion/irritation/irritation_icon.png', color: '#FFEBD0' }
        ]
      },

      영감체: {
        similar: [
          { name: '집중', icon: 'emotion/focus/focus_icon.png', color: '#E0FF99' },
          { name: '예민', icon: 'emotion/sensitive/sensitive_icon.png', color: '#E4FFED' }
        ],
        different: [
          { name: '우울', icon: 'emotion/blue/blue_icon.png', color: '#9EB6FF' },
          { name: '공허', icon: 'emotion/void/void_icon.png', color: '#C6C4FF' }
        ]
      },


      고요체: {
        similar: [
            { name: '집중', icon: 'emotion/focus/focus_icon.png', color: '#E0FF99' },
            { name: '침착', icon: 'emotion/calmness/calmness_icon.png', color: '#CAFCFF' }
        ],
        different: [
          { name: '분노', icon: 'emotion/anger/anger_icon.png', color: '#FFCAB7' },
          { name: '설렘', icon: 'emotion/flutter_front.png', color: '#FFDBF2' }
        ]
      },

      예민체: {
        similar: [
            { name: '집중', icon: 'emotion/focus/focus_icon.png', color: '#E0FF99' },
            { name: '불안', icon: 'emotion/anxiety/anxiety_icon2.png', color: '#EBC9FF' }
        ],
        different: [
          { name: '편안', icon: 'emotion/relex/relex_icon.png', color: '#C6FFEE' },
          { name: '침착', icon: 'emotion/calmness/calmness_icon.png', color: '#CAFCFF' }
        ]
      },

      침착체: {
        similar: [
            { name: '고요', icon: 'emotion/silence/silence_icon.png', color: '#D7E7FF' },
            { name: '집중', icon: 'emotion/focus/focus_icon.png', color: '#E0FF99' },
        ],
        different: [
          { name: '불안', icon: 'emotion/anxiety/anxiety_icon2.png', color: '#EBC9FF' },
          { name: '공포', icon: 'emotion/fear/fear_icon.png', color: '#9F96FF' }
        ]
      },


      집중체: {
        similar: [
            { name: '침착', icon: 'emotion/calmness/calmness_icon.png', color: '#CAFCFF' },
            { name: '예민', icon: 'emotion/sensitive/sensitive_icon.png', color: '#E4FFED' }
        ],
        different: [
            { name: '공허', icon: 'emotion/void/void_icon.png', color: '#C6C4FF' },
            { name: '불안', icon: 'emotion/anxiety/anxiety_icon2.png', color: '#EBC9FF' }
        ]
      },

        공허체: {
        similar: [
            { name: '공포', icon: 'emotion/fear/fear_icon.png', color: '#9F96FF' },
            { name: '우울', icon: 'emotion/blue/blue_icon.png', color: '#9EB6FF' },
        ],
        different: [
            { name: '설렘', icon: 'emotion/flutter_front.png', color: '#FFDBF2' },
            { name: '영감', icon: 'emotion/inspire/inspire_icon2.png', color: '#E5D9FF' }
        ]
      },

      공포체: {
        similar: [
            { name: '불안', icon: 'emotion/anxiety/anxiety_icon2.png', color: '#EBC9FF' },
            { name: '예민', icon: 'emotion/sensitive/sensitive_icon.png', color: '#E4FFED' }
        ],
        different: [
            { name: '편안', icon: 'emotion/relex/relex_icon.png', color: '#C6FFEE' },
          { name: '행복', icon: 'emotion/happiness/happiness_icon.png', color: '#FFFBCA' },
        ]
      },


      우울체: {
        similar: [
            { name: '불안', icon: 'emotion/anxiety/anxiety_icon2.png', color: '#EBC9FF' },
            { name: '공허', icon: 'emotion/void/void_icon.png', color: '#C6C4FF' },
        ],
        different: [
            { name: '행복', icon: 'emotion/happiness/happiness_icon.png', color: '#FFFBCA' },
            { name: '설렘', icon: 'emotion/flutter_front.png', color: '#FFDBF2' }
        ]
      },

      불안체: {
        similar: [
            { name: '공포', icon: 'emotion/fear/fear_icon.png', color: '#9F96FF' },
            { name: '예민', icon: 'emotion/sensitive/sensitive_icon.png', color: '#E4FFED' }
        ],
        different: [
            { name: '편안', icon: 'emotion/relex/relex_icon.png', color: '#C6FFEE' },
          { name: '고요', icon: 'emotion/silence/silence_icon.png', color: '#D7E7FF' }
        ]
      },


      증오체: {
        similar: [
            { name: '분노', icon: 'emotion/anger/anger_icon.png', color: '#FFCAB7' },
            { name: '짜증', icon: 'emotion/irritation/irritation_icon.png', color: '#FFEBD0' }
        ],
        different: [
          { name: '행복', icon: 'emotion/happiness/happiness_icon.png', color: '#FFFBCA' },
            { name: '편안', icon: 'emotion/relex/relex_icon.png', color: '#C6FFEE' }
        ]
      },

      분노체: {
        similar: [
            { name: '증오', icon: 'emotion/hate/hate_icon.png', color: '#EBFFB7' },
            { name: '짜증', icon: 'emotion/irritation/irritation_icon.png', color: '#FFEBD0' }
        ],
        different: [
          { name: '고요', icon: 'emotion/silence/silence_icon.png', color: '#D7E7FF' },
            { name: '침착', icon: 'emotion/calmness/calmness_icon.png', color: '#CAFCFF' }
        ]
      },

      짜증체: {
        similar: [
              { name: '갈등', icon: 'emotion/fear/fear_icon.png', color: '#FFDBDC' },
          { name: '예민', icon: 'emotion/sensitive/sensitive_icon.png', color: '#E4FFED' }
        ],
        different: [
          { name: '공허', icon: 'emotion/void/void_icon.png', color: '#C6C4FF' },
            { name: '고요', icon: 'emotion/silence/silence_icon.png', color: '#D7E7FF'}
        ]
      },

      갈등체: {
        similar: [
              { name: '짜증', icon: 'emotion/irritation/irritation_icon.png', color: '#FFEBD0' },
          { name: '증오', icon: 'emotion/hate/hate_icon.png', color: '#EBFFB7' },
        ],
        different: [
          { name: '침착', icon: 'emotion/calmness/calmness_icon.png', color: '#CAFCFF' },
            { name: '편안', icon: 'emotion/relex/relex_icon.png', color: '#C6FFEE' }
        ]
      }


    };

    function renderRelatedEmotions(emotionName) {
      const relation = emotionRelations[emotionName];
      if (!relation) {
        console.warn(`${emotionName}에 대한 관계 데이터 없음`);
        return;
      }

      console.log("🟢 relation.similar:", relation.similar);
      console.log("🟢 relation.different:", relation.different);

      // 비슷한 감정 처리
      relation.similar.forEach((emotion, index) => {
        document.getElementById(`similar-shape-${index + 1}`).style.backgroundColor = emotion.color;
        document.getElementById(`similar-icon-${index + 1}`).src = emotion.icon;
        document.getElementById(`similar-name-${index + 1}`).innerText = emotion.name;
      });

      // 다른 감정 처리
      relation.different.forEach((emotion, index) => {
        document.getElementById(`different-shape-${index + 1}`).style.backgroundColor = emotion.color;
        document.getElementById(`different-icon-${index + 1}`).src = emotion.icon;
        document.getElementById(`different-name-${index + 1}`).innerText = emotion.name;
      });
    }



    if (emotion && resultData[emotion]) {

        
    const data = resultData[emotion];

    const matchEl = document.getElementById('emotion-match');
      matchEl.innerHTML = `
        <img src="${data.icon}" alt="${emotion} 아이콘" class="highlight-icon-img">
        <span class="highlight-text">${emotion}</span>와 잘 어울리는 감정 추천
      `;

    document.documentElement.style.setProperty('--highlight-color', data.highlightColor);


      document.getElementById('emotion-bg').src = data.bg;

    const overlayEl = document.getElementById('emotion-icon-overlay');
    overlayEl.src = data.overlayIcon || '';
    overlayEl.style.display = data.overlayIcon ? 'block' : 'none';

      document.getElementById('emotion-detail2').innerHTML = data.detail2;


      renderRelatedEmotions(emotion);

    }
    }

});
