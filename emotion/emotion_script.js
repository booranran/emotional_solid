
import * as THREE from 'three';
import { GLTFLoader } from 'GLTFLoader';
import { OrbitControls } from 'OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#canvas"),
  antialias: true,
  alpha: true
});
renderer.setSize(1000, 1000);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 10, 10);
scene.add(light);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enableZoom = false;
controls.enablePan = false;

const container = document.querySelector('.obj3d-container');
const modelPath = container?.getAttribute('data-model');

const loader = new GLTFLoader();
loader.load(modelPath, (gltf) => {
  const model = gltf.scene;

  // ✅ 1. 스케일 먼저 적용
  model.scale.set(2.0, 2.0, 2.0);

  // ✅ 2. 박스 기준 중심 계산 (스케일 반영된 상태)
  const box = new THREE.Box3().setFromObject(model);
  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());

  // ✅ 3. 중심을 원점으로 정렬
  model.position.sub(center);

  // ✅ 4. 씬에 추가
  scene.add(model);

  // ✅ 5. 카메라 위치 = 모델 크기에 비례한 거리
  const distance = size.length() * 1.5;
  camera.position.set(0, 0, 50);
  camera.lookAt(0, 0, 0);

  // ✅ 6. OrbitControls 기준 중심도 동일하게 맞추기
  controls.target.set(0, 0, 0);
  controls.update();

  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }

  animate();
});


// 이미지 클릭 시 교체
document.addEventListener("DOMContentLoaded", () => {
  window.changeImage = function(element, targetID) {
    const target = document.getElementById(targetID);
    if (!target) return;
    target.src = element.src;

    document.querySelectorAll(".thumb").forEach(img => img.classList.remove("active"));
    element.classList.add("active");
  };
});


  // 텍스처 텍스트 마우스 / 스크롤 이벤트
const textureText = document.querySelector('.texture-text, .long-texture-text, .short-texture-text');
const bg = textureText.getAttribute('data-bg');
textureText.style.setProperty('--bg-img', `url(${bg})`);

// 📱💻 공통: 스크롤 시 배경 위치 아래 → 위로
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;

  const scrollPercent = (scrollY / maxScroll) * 100;

  // 🎯 아래 → 위 효과로 만들기 위해 100% → 0% 방향으로
  const backgroundY = 100 - scrollPercent * 5;

  textureText.style.backgroundPosition = `center ${backgroundY}%`;
});



const iconWrappers = document.querySelectorAll('.icon-wrapper');

// IntersectionObserver 설정
const scrollObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active'); // ✅ 요소가 다시 사라지면 클래스 제거
    }
  });
}, {
  threshold: 0.5 // ✅ 0.9보다 0.5가 반응 더 자연스러움
});

// 요소마다 옵저버 연결
iconWrappers.forEach(wrapper => {
  scrollObserver.observe(wrapper);
});

iconWrappers.forEach(wrapper => scrollObserver.observe(wrapper));


  // 상세 이미지 버튼 클릭 시 교체
window.changeDetail = function(buttonElement) {
  const mainImg = document.getElementById('detail-image');

  // 1. 메인 설명 이미지 바꾸기
  const newImgSrc = buttonElement.getAttribute('data-img');
  mainImg.src = newImgSrc;

  // 2. 모든 버튼 초기화
  document.querySelectorAll('.detail-btn').forEach(btn => {
    btn.src = btn.getAttribute('data-off');
    btn.classList.remove('selected');
  });

  // 3. 클릭된 버튼만 활성화
  buttonElement.src = buttonElement.getAttribute('data-on');
  buttonElement.classList.add('selected');
};



const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 // 50% 이상 보이면 발동
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const f1 = document.querySelector(".flutter-1");
    const f2 = document.querySelector(".flutter-2");
    const f3 = document.querySelector(".flutter-3");

    if (entry.isIntersecting) {
      // 중앙 등장
      f1.classList.remove("exit");
      f1.classList.add("enter");
      f2.classList.remove("exit");
      f2.classList.add("enter");
      f3.classList.remove("exit");
      f3.classList.add("enter");
    } else {
      // 화면에서 사라짐 → 퇴장
      f1.classList.remove("enter");
      f1.classList.add("exit");
      f2.classList.remove("enter");
      f2.classList.add("exit");
      f3.classList.remove("enter");
      f3.classList.add("exit");
    }
  });
}, options);

observer.observe(document.querySelector(".box-container"));


  document.querySelectorAll('.card-img').forEach(img => {
    const original = img.src;
    const hover = img.getAttribute('data-hover');
    
    img.closest('.caution-card').addEventListener('mouseenter', () => {
      img.src = hover;
    });

    img.closest('.caution-card').addEventListener('mouseleave', () => {
      img.src = original;
    });
  });


document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.detail-section, .background-container, .flutter-text').forEach(section => {
    const color = section.getAttribute('data-bgcolor');
    const txtcolor = section.getAttribute('data-txtcolor');
    if (color) {
      section.style.setProperty('--bg-color', color);
    }
    if (txtcolor) {
      section.style.setProperty('--txt-color', txtcolor);
    }
  });
});

  document.querySelectorAll('.card-img').forEach(img => {
  const original = img.src;
  const hover = img.getAttribute('data-hover');

  let isHover = false;

  // PC: hover 동작
  if (!/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)) {
    img.addEventListener('mouseenter', () => {
      img.src = hover;
    });
    img.addEventListener('mouseleave', () => {
      img.src = original;
    });
  } else {
    // 모바일: 터치로 토글
    img.addEventListener('click', () => {
      isHover = !isHover;
      img.src = isHover ? hover : original;
    });
  }
});
