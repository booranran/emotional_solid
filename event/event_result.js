// event_result

const params = new URLSearchParams(window.location.search);
const emotion = params.get("emotion");

const emotionMap = {
  설렘체: {
    title: "심장박동처럼 두근거리는 감정, 설렘",
    icon: "emotion/flutter_front.png",
    bg:"event/bg/flutter_bg.png"
    
  },
  행복체: {
    title: "따스한 온도로 퍼져나가는 감정, 행복",
    icon: "emotion/happiness/happiness_icon.png",
    bg:"event/bg/happiness_bg.png"
  },
  편안체: {
    title: "포근하게 나를 감싸는 감정, 편안",
    icon: "emotion/relex/relex_icon.png",
    bg:"event/bg/relex_bg.png"
  },
  영감체: {
    title: "빛처럼 번쩍이며 발산하는 감정, 영감",
    icon: "emotion/inspire/inspire_icon2.png",
    bg:"event/bg/inspire_bg.png"
  },
// 구분선---------------------------------
  고요체: {
    title: "차분하면서도 동요하지 않는 감정, 고요",
    icon: "emotion/silence/silence_icon.png",
    bg:"event/bg/silence_bg.png"
  },
  예민체: {
    title: "남들보다 독특하고 섬세한 감정, 에민",
    icon: "emotion/sensitive/sensitive_icon.png",
    bg:"event/bg/sensitive_bg.png"
  },
  침착체: {
    title: "내면에 고요한 흐름을 가진 감정, 침착",
    icon: "emotion/calmness/calmness_icon.png",
    bg:"event/bg/calmness_bg.png"
  },
  집중체: {
    title: "한 지점을 향해 쏟아내는 감정, 집중",
    icon: "emotion/focus/focus_icon.png",
    bg:"event/bg/focus_bg.png"
  },
// 구분선 ---------------------------------
    공허체: {
    title: "텅 빈 채로 외로운 감정, 공허",
    icon: "../emotion/void/void_icon.png",
    bg:"event/bg/void_bg.png"
  },
    공포체: {
    title: "오싹거리며 소름이 돋는 감정, 공포",
    icon: "../emotion/fear/fear_icon.png",
    bg:"event/bg/fear_bg.png"
  },
    우울체: {
    title: "심해 속으로 깊이 가라앉는 감정, 우울",
    icon: "../emotion/blue/blue_icon.png",
    bg:"event/bg/blue_bg.png"
  },
    불안체: {
    title: "흔들리며 위태로운 감정, 불안",
    icon: "../emotion/anxiety/anxiety_icon.png",
    bg:"event/bg/anxiety_bg.png"
  },

//구분선 -----------------------------------

    증오체: {
    title: "단 하나를 향해 타오르는 감정, 증오",
    icon: "emotion/hate/hate_icon.png",
    bg:"event/bg/hate_bg.png"
  },
      분노체: {
    title: "폭발하듯 끓어오르는 감정, 분노",
    icon: "emotion/anger/anger_icon.png",
    bg:"event/bg/anger_bg.png"
  },    
  짜증체: {
    title: "삐죽삐죽 가시가 돋은 감정, 짜증",
    icon: "emotion/irritation/irritation_icon.png",
    bg:"event/bg/irritation_bg.png"
  },    
  갈등체: {
    title: "양 옆에서 격렬하게 부딪히는 감정, 갈등",
    icon: "emotion/discord/discord_icon.png",
    bg:"event/bg/discord_bg.png"
  }

};

if (emotion && emotionMap[emotion]) {
  document.getElementById("emotionTitle").innerText = emotionMap[emotion].title;
  document.getElementById("emotionIcon").src = emotionMap[emotion].icon;
  document.getElementById("emotionBg").src = emotionMap[emotion].bg;
}

if (emotion) {
  const viewMoreLink = document.getElementById("view-more-link");
  viewMoreLink.href = `event_result_detail.html?emotion=${encodeURIComponent(emotion)}`;
}

