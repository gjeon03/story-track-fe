# 📍 StoryTrack

**StoryTrack**은 방문한 장소를 기록하고 공유할 수 있도록 돕는 **모바일 친화적인 웹 애플리케이션(Web App)** 입니다.  
**PWA(Progressive Web App)** 를 적용하여 **네이티브 앱처럼 설치하여 사용할 수 있으며, 모바일 환경에서 최적화된 UI를 제공합니다.**

> 🚀 **본 프로젝트는 해커톤에서 개발된 결과물이며, 현재 외부 서비스되지 않습니다.**

---

## 🔗 배포 링크

👉 [**StoryTrack 데모 보기**](https://temp-project-rouge.vercel.app/)

---

## ✨ 프로젝트 개요

- 사용자가 **이미지와 간단한 코멘트만 업로드**하면,
- **장소 메타데이터 + 코멘트 분석을 기반으로 자동 블로그 포스팅**을 생성하는 플랫폼입니다.
- 복잡한 과정 없이, 방문한 장소를 쉽게 기록하고 공유할 수 있습니다.
- **모바일 환경에 최적화된 UI**와 **PWA(Progressive Web App) 지원**으로 편리한 사용성을 제공합니다.

---

## 🚀 주요 기능

### 📸 **자동 블로그 포스팅 생성**

- 업로드한 **이미지의 메타데이터**와 **사용자 코멘트**를 결합하여 **개인화된 블로그 포스팅** 자동 생성

### 🗺️ **Google Map API 활용**

- **Custom Marker & Marker Clusterer**
  - 줌 인/아웃 시 블로그 카운트 변화 반영
  - 클러스터링을 통해 다수의 마커를 효율적으로 표시

### 🎤 **음성 입력을 활용한 직관적인 UI**

- **Web Audio API**
  - 음성 입력의 **볼륨 크기에 따라 변화하는 UI** 제공
- **Web Speech API**
  - **음성을 텍스트로 변환하여 코멘트 작성 가능**

### 📱 **모바일 친화적인 UI & PWA 지원**

- 모바일 환경에서 **최적화된 인터페이스** 제공
- **PWA(Progressive Web App) 적용**

### 💾 **IndexedDB 활용 (백엔드 대체)**

- **해커톤 종료 후 백엔드 서버가 운영되지 않아 IndexedDB를 활용한 로컬 저장 방식 적용**
- 브라우저 내장 데이터베이스를 활용하여 **일정 데이터를 유지**
- 원래는 백엔드 API 연동이었으나, 현재는 **IndexedDB를 통해 데이터 관리**

---

## 🛠️ 기술 스택

- **Frontend:** `Next.js`, `TypeScript`, `React Query`, `Tailwind CSS`
- **APIs:** `Google Map API`, `Web Audio API`, `Web Speech API`, `Gemini API`
- **Local Storage:** `IndexedDB`
- **PWA:** `Next.js PWA` 적용

---

## 🚀 실행 방법

```sh
git clone https://github.com/your-repo.git
cd your-repo
yarn install
yarn dev
```
