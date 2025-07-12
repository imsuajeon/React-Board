import {
  Search,
  School,
  Podcast,
  HeartHandshake,
  Store,
  BookOpenText,
  MousePointerClick,
  BadgeCheck,
  ArrowDown,
  Heart,
} from 'lucide-react';
export default function Home() {
  return (
    <div className="page bg-black">
      {/* 헤더 만들어야지 */}
      <header className="w-full flex items-center justify-between px-24 bg-neutral-900">
        {/* 왼쪽 */}
        <div className="h-12 flex items-center gap-4 text-sm">
          <img src="./src/small.svg" alt="" className="w-8 h-8" />
          <a href="" className="font-bold">
            클래스
          </a>
          <a href="" className="font-bold">
            배움 노트
          </a>
          <span className="text-neutral-800">|</span>
          <a href="" className="font-bold">
            토픽 인사이트
          </a>
          <span className="text-neutral-800">|</span>
          <a href="" className="font-bold">
            밍랩
          </a>
          <a href="" className="font-bold">
            밍고 스테이지
          </a>
          <span className="text-neutral-800">|</span>
          <a href="" className="font-bold">
            밍고 스토어
          </a>
          <a href="" className="font-bold">
            밍거진
          </a>
        </div>
        {/* 오른쪽 */}
        <div className="flex items-center gap-4 text-sm ">
          <a href="/login" className="text-gray-400">
            로그인
          </a>
          <span className="text-neutral-800">|</span>
          <a href="" className="text-gray-400">
            우리가 하는 일
          </a>
        </div>
      </header>
      {/* 메인 */}
      <main className="w-full flex items-center justify-center flex-col p-24 bg-black">
        <div className="w-full flex flex-wrap h-24 items-center justify-between mb-6 gap-1">
          <p className="text-2xl font-bold">
            나의 학습 여정이, <br />
            나만의 창작으로 이어지는 플랫폼
          </p>
          <div className="flex items-center gap-2">
            <Search className="text-neutral-500" />
            <div className="w-80 flex-1 flex items-center justify-start gap-2 bg-neutral-900 rounded-lg pl-4 py-2 pr-15 border border-neutral-700">
              <input
                type="text"
                placeholder="관심있는 주제의 클래스를 검색하세요"
                className="flex-1 text-white flex-start text-sm"
              />
            </div>
            <button className="px-4 py-2 bg-neutral-900 text-white rounded-lg border border-neutral-700 text-sm">
              검색
            </button>
          </div>
        </div>
        <div className="w-full flex flex-wrap h-24 items-center justify-between gap-4">
          <a
            href=""
            className="w-[calc(20%-16px)] border border-neutral-700 bg-neutral-900 p-6 gap-4 rounded-2xl">
            <div className="flex gap-2">
              <School className="text-red-800" />
              <p className="font-bold">클래스</p>
            </div>
            <p className="mt-2 text-sm">
              배우고 싶은 교육이 있으신가요 <br />
              여러분의 열정을 더욱 탄탄하게!
            </p>
          </a>
          <a
            href=""
            className="w-[calc(20%-16px)]  border border-neutral-700 bg-neutral-900 p-6 gap-4 rounded-2xl">
            <div className="flex gap-2">
              <Podcast className="text-yellow-300" />
              <p className="font-bold">토픽 인사이트</p>
            </div>
            <p className="mt-2 text-sm">
              잠재력이 듬뿍 담긴 아이디어를
              <br />
              나누며 소통하는 열린 공간
            </p>
          </a>
          <a
            href=""
            className="w-[calc(20%-16px)]  border border-neutral-700 bg-neutral-900 p-6 gap-4 rounded-2xl">
            <div className="flex gap-2">
              <HeartHandshake className="text-green-500" />
              <p className="font-bold">밍랩</p>
            </div>
            <p className="mt-2 text-sm">
              나의 지식을 밍고들과 나누어
              <br />
              우리의 창작물을 만들어보세요!
            </p>
          </a>
          <a
            href=""
            className="w-[calc(20%-16px)]  border border-neutral-700 bg-neutral-900 px-6 p-6 rounded-2xl">
            <div className="flex gap-2 ">
              <Store className="text-blue-600" />
              <p className="font-bold">스테이지</p>
            </div>
            <p className="mt-2 text-sm">
              소개합니다. 우리의 반짝임! <br />
              밍고만의 소중한 결과를!
            </p>
          </a>
          <a
            href=""
            className="w-[calc(20%-16px)]  border border-neutral-700 bg-neutral-900 p-6 gap-4 rounded-2xl">
            <div className="flex gap-2">
              <BookOpenText className="text-purple-500" />
              <p className="font-bold">밍거진</p>
            </div>
            <p className="mt-2 text-sm">
              특별하고 엄청난 성과를 이룬 <br />
              밍고 스타들의 노하우!
            </p>
          </a>
        </div>
        {/* 핫토픽 */}
        <div className="w-full flex flex-wrap h-24 justify-between gap-4 mt-24 mb-70">
          <div className="w-full flex flex-col">
            <div className="flex gap-2">
              <img src="./src/fire.gif" className="w-8 h-8" />
              <p className="text-2xl font-bold">핫 토픽</p>
            </div>
            <p className="text-neutral-600">
              지금 가장 주목받는 주제들을 살펴보고, 다양한 관점의 인사이트를
              얻어보세요.
            </p>
          </div>
          <div className="w-[calc(20%-16px)">
            <a
              href=""
              className="flex items-end w-full h-70 border border-neutral-700 bg-neutral-900 p-4 gap-4 rounded-2xl mb-4">
              <p className="mt-2 text-2xl font-bold">
                Atomic Design <br />
                vs FSD, 프런트 <br />
                엔드 구조 설계
              </p>
              <MousePointerClick className="font-sm text-white bg-neutral-700 rounded-lg p-2 w-8 h-8" />
            </a>
            <div className="w-full flex items-center justify-between">
              <div className="relative w-10 h-10 mr-2">
                <img src="" className="w-10 h-10 rounded-full object-cover" />
                <BadgeCheck className="absolute bottom-0 right-0 w-4 h-4 bg-blue-500 text-white rounded-full" />
              </div>
              <div className="flex flex-col">
                <p className="text-xs text-neutral-400">
                  IT 및 기술 분야 · 소프트웨어 엔지니어
                </p>
                <p className="font-bold text-white flex items-center gap-1">
                  개발자 9Diin
                </p>
              </div>
            </div>
          </div>
          <div className="w-[calc(20%-16px)">
            <a
              href=""
              className="flex items-end w-full h-70 border border-neutral-700 bg-neutral-900 p-4 gap-4 rounded-2xl mb-4">
              <p className="mt-2 text-2xl font-bold">
                개발자도 브랜딩
                <br />
                을 해야할까? 답 <br />은 YES!
              </p>
              <MousePointerClick className="font-sm text-white bg-neutral-700 rounded-lg p-2 w-7.5 h-7.5" />
            </a>
            <div className="w-full flex items-center justify-start gap-2">
              <div className="relative w-10 h-10 mr-2">
                <img src="" className="w-10 h-10 rounded-full object-cover" />
                <BadgeCheck className="absolute bottom-0 right-0 w-4 h-4 bg-blue-500 text-white rounded-full" />
              </div>
              <div className="flex flex-col ">
                <p className="text-xs text-neutral-400">
                  IT 및 기술 분야 · 교육·비즈니스
                </p>
                <p className="font-bold text-white flex items-center">
                  밍고 Team
                </p>
              </div>
            </div>
          </div>
          <div className="w-[calc(20%-16px)">
            <a
              href=""
              className="flex items-end w-full h-70 border border-neutral-700 bg-neutral-900 p-4 gap-4 rounded-2xl mb-4">
              <p className="mt-2 text-2xl font-bold">
                MVP를 빠르게 <br />
                검증하기 위한 <br />
                UI 전략 ...
              </p>
              <MousePointerClick className="font-sm text-white bg-neutral-700 rounded-lg p-2 w-8 h-8" />
            </a>
            <div className="w-full flex items-center justify-between">
              <div className="relative w-10 h-10 mr-2">
                <img src="" className="w-10 h-10 rounded-full object-cover" />
                <BadgeCheck className="absolute bottom-0 right-0 w-4 h-4 bg-blue-500 text-white rounded-full" />
              </div>
              <div className="flex flex-col">
                <p className="text-xs text-neutral-400">
                  IT 및 기술 분야 · 소프트웨어 엔지니어
                </p>
                <p className="font-bold text-white flex items-center gap-1">
                  개발자 9Diin
                </p>
              </div>
            </div>
          </div>
          <div className="w-[calc(20%-16px)">
            <a
              href=""
              className="flex items-end w-full h-70 border border-neutral-700 bg-neutral-900 p-4 gap-4 rounded-2xl mb-4">
              <p className="mt-2 text-2xl font-bold">
                '한 번 더'가 만 <br />
                든 창역자의 정<br />
                신력
              </p>
              <MousePointerClick className="font-sm text-white bg-neutral-700 rounded-lg p-2 w-8 h-8" />
            </a>
            <div className="w-full flex items-center justify-between">
              <div className="relative w-10 h-10 mr-2">
                <img src="" className="w-10 h-10 rounded-full object-cover" />
                <BadgeCheck className="absolute bottom-0 right-0 w-4 h-4 bg-blue-500 text-white rounded-full" />
              </div>
              <div className="flex flex-col">
                <p className="text-xs text-neutral-400">
                  IT 및 기술 분야 · 소프트웨어 엔지니어
                </p>
                <p className="font-bold text-white flex items-center gap-1">
                  개발자 9Diin
                </p>
              </div>
            </div>
          </div>
          <div className="w-[calc(20%-16px)">
            <a
              href=""
              className="flex items-end w-full h-70 border border-neutral-700 bg-neutral-900 p-4 gap-4 rounded-2xl mb-4">
              <p className="mt-2 text-2xl font-bold">
                성공을 부르는 <br />
                도미노: 작은 선 <br />
                택이 만드는 ...
              </p>
              <MousePointerClick className="font-sm text-white bg-neutral-700 rounded-lg p-2 w-8 h-8" />
            </a>
            <div className="w-full flex items-center justify-start">
              <div className="relative w-10 h-10 mr-2">
                <img src="" className="w-10 h-10 rounded-full object-cover" />
                <BadgeCheck className="absolute bottom-0 right-0 w-4 h-4 bg-blue-500 text-white rounded-full" />
              </div>
              <div className="flex flex-col">
                <p className="text-xs text-neutral-400">
                  IT 및 기술 분야 · 교육·비즈니스
                </p>
                <p className="font-bold text-white flex items-center gap-1">
                  밍고 Team
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 실시간 인기 클래스*/}
        <div className="w-full flex flex-wrap h-24 justify-between gap-4 mt-24">
          <div className="w-full flex flex-col">
            <div className="flex gap-2">
              <p className="text-2xl font-bold">실시간 인기 클래스</p>
            </div>
            <p className="text-neutral-600">
              현재 학습자들이 가장 많이 참여하고 있는 인기 클래스예요. 함께
              배워볼까요?
            </p>
          </div>
          <div className="w-[calc(25%-16px)]">
            <a href="w-full ">
              <img src="./src/1.webp" className="rounded-2xl" />
            </a>
            <div className="flex items-center gap-2 text-xs mt-2">
              <span className="px-2 py-1 rounded-lg border border-neutral-300  text-neutral-300">
                프로그래밍
              </span>
              <span className="px-2 py-1 rounded-lg border border-neutral-300 text-neutral-300">
                프론트엔드
              </span>
              <span className="text-neutral-400 text-xl">|</span>
              <span className="px-2 py-1 rounded-lg border border-neutral-300 text-neutral-300">
                초급
              </span>
            </div>
            <p className="mt-3 font-bold">
              백엔드의 새로운 패러다임, Nest.js 커뮤니티 서비스 만들기
            </p>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex gap-3">
                <div className="flex items-center text-sm text-blue-400">
                  <ArrowDown size={16} />
                  <p className="ml-1">25%</p>
                </div>
                <p className="font-bold">79,000원</p>
              </div>
              <div className="flex items-center gap-1 text-neutral-400">
                <Heart size={18} className="text-red-600" />
                <p className="text-sm">10</p>
              </div>
            </div>
          </div>
          <div className="w-[calc(25%-16px)]">
            <a href="w-full ">
              <img src="./src/1.webp" className="rounded-2xl" />
            </a>
            <div className="flex items-center gap-2 text-xs mt-2">
              <span className="px-2 py-1 rounded-lg border border-neutral-300  text-neutral-300">
                프로그래밍
              </span>
              <span className="px-2 py-1 rounded-lg border border-neutral-300 text-neutral-300">
                프론트엔드
              </span>
              <span className="text-neutral-400 text-xl">|</span>
              <span className="px-2 py-1 rounded-lg border border-neutral-300 text-neutral-300">
                초급
              </span>
            </div>
            <p className="mt-3 font-bold">
              백엔드의 새로운 패러다임, Nest.js 커뮤니티 서비스 만들기
            </p>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex gap-3">
                <div className="flex items-center text-sm text-blue-400">
                  <ArrowDown size={16} />
                  <p className="ml-1">25%</p>
                </div>
                <p className="font-bold">79,000원</p>
              </div>
              <div className="flex items-center gap-1 text-neutral-400">
                <Heart size={18} className="text-red-600" />
                <p className="text-sm">10</p>
              </div>
            </div>
          </div>
          <div className="w-[calc(25%-16px)]">
            <a href="w-full ">
              <img src="./src/1.webp" className="rounded-2xl" />
            </a>
            <div className="flex items-center gap-2 text-xs mt-2">
              <span className="px-2 py-1 rounded-lg border border-neutral-300  text-neutral-300">
                프로그래밍
              </span>
              <span className="px-2 py-1 rounded-lg border border-neutral-300 text-neutral-300">
                프론트엔드
              </span>
              <span className="text-neutral-400 text-xl">|</span>
              <span className="px-2 py-1 rounded-lg border border-neutral-300 text-neutral-300">
                초급
              </span>
            </div>
            <p className="mt-3 font-bold">
              백엔드의 새로운 패러다임, Nest.js 커뮤니티 서비스 만들기
            </p>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex gap-3">
                <div className="flex items-center text-sm text-blue-400">
                  <ArrowDown size={16} />
                  <p className="ml-1">25%</p>
                </div>
                <p className="font-bold">79,000원</p>
              </div>
              <div className="flex items-center gap-1 text-neutral-400">
                <Heart size={18} className="text-red-600" />
                <p className="text-sm">10</p>
              </div>
            </div>
          </div>
          <div className="w-[calc(25%-16px)]">
            <a href="w-full ">
              <img src="./src/1.webp" className="rounded-2xl" />
            </a>
            <div className="flex items-center gap-2 text-xs mt-2">
              <span className="px-2 py-1 rounded-lg border border-neutral-300  text-neutral-300">
                프로그래밍
              </span>
              <span className="px-2 py-1 rounded-lg border border-neutral-300 text-neutral-300">
                프론트엔드
              </span>
              <span className="text-neutral-400 text-xl">|</span>
              <span className="px-2 py-1 rounded-lg border border-neutral-300 text-neutral-300">
                초급
              </span>
            </div>
            <p className="mt-3 font-bold">
              백엔드의 새로운 패러다임, Nest.js 커뮤니티 서비스 만들기
            </p>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex gap-3">
                <div className="flex items-center text-sm text-blue-400">
                  <ArrowDown size={16} />
                  <p className="ml-1">25%</p>
                </div>
                <p className="font-bold">79,000원</p>
              </div>
              <div className="flex items-center gap-1 text-neutral-400">
                <Heart size={18} className="text-red-600" />
                <p className="text-sm">10</p>
              </div>
            </div>
          </div>
        </div>
        {/* 신규 클래스 */}
        <div className="w-full flex flex-wrap h-24 justify-between gap-4 mt-100">
          <div className="w-full flex flex-col">
            <div className="flex gap-2">
              <p className="text-2xl font-bold">신규 클래스</p>
            </div>
            <p className="text-neutral-600">
              새롭게 오픈된 따끈따끈한 클래스들을 만나보세요. 지금 바로 시작할
              수 있어요!
            </p>
          </div>
          <div className="w-[calc(25%-16px)]">
            <a href="w-full ">
              <img src="./src/1.webp" className="rounded-2xl" />
            </a>
            <div className="flex items-center gap-2 text-xs mt-2">
              <span className="px-2 py-1 rounded-lg border border-neutral-300  text-neutral-300">
                프로그래밍
              </span>
              <span className="px-2 py-1 rounded-lg border border-neutral-300 text-neutral-300">
                프론트엔드
              </span>
              <span className="text-neutral-400 text-xl">|</span>
              <span className="px-2 py-1 rounded-lg border border-neutral-300 text-neutral-300">
                초급
              </span>
            </div>
            <p className="mt-3 font-bold">
              백엔드의 새로운 패러다임, Nest.js 커뮤니티 서비스 만들기
            </p>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex gap-3">
                <div className="flex items-center text-sm text-blue-400">
                  <ArrowDown size={16} />
                  <p className="ml-1">25%</p>
                </div>
                <p className="font-bold">79,000원</p>
              </div>
              <div className="flex items-center gap-1 text-neutral-400">
                <Heart size={18} className="text-red-600" />
                <p className="text-sm">10</p>
              </div>
            </div>
          </div>
          <div className="w-[calc(25%-16px)]">
            <a href="w-full ">
              <img src="./src/1.webp" className="rounded-2xl" />
            </a>
            <div className="flex items-center gap-2 text-xs mt-2">
              <span className="px-2 py-1 rounded-lg border border-neutral-300  text-neutral-300">
                프로그래밍
              </span>
              <span className="px-2 py-1 rounded-lg border border-neutral-300 text-neutral-300">
                프론트엔드
              </span>
              <span className="text-neutral-400 text-xl">|</span>
              <span className="px-2 py-1 rounded-lg border border-neutral-300 text-neutral-300">
                초급
              </span>
            </div>
            <p className="mt-3 font-bold">
              백엔드의 새로운 패러다임, Nest.js 커뮤니티 서비스 만들기
            </p>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex gap-3">
                <div className="flex items-center text-sm text-blue-400">
                  <ArrowDown size={16} />
                  <p className="ml-1">25%</p>
                </div>
                <p className="font-bold">79,000원</p>
              </div>
              <div className="flex items-center gap-1 text-neutral-400">
                <Heart size={18} className="text-red-600" />
                <p className="text-sm">10</p>
              </div>
            </div>
          </div>
          <div className="w-[calc(25%-16px)]">
            <a href="w-full ">
              <img src="./src/1.webp" className="rounded-2xl" />
            </a>
            <div className="flex items-center gap-2 text-xs mt-2">
              <span className="px-2 py-1 rounded-lg border border-neutral-300  text-neutral-300">
                프로그래밍
              </span>
              <span className="px-2 py-1 rounded-lg border border-neutral-300 text-neutral-300">
                프론트엔드
              </span>
              <span className="text-neutral-400 text-xl">|</span>
              <span className="px-2 py-1 rounded-lg border border-neutral-300 text-neutral-300">
                초급
              </span>
            </div>
            <p className="mt-3 font-bold">
              백엔드의 새로운 패러다임, Nest.js 커뮤니티 서비스 만들기
            </p>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex gap-3">
                <div className="flex items-center text-sm text-blue-400">
                  <ArrowDown size={16} />
                  <p className="ml-1">25%</p>
                </div>
                <p className="font-bold">79,000원</p>
              </div>
              <div className="flex items-center gap-1 text-neutral-400">
                <Heart size={18} className="text-red-600" />
                <p className="text-sm">10</p>
              </div>
            </div>
          </div>
          <div className="w-[calc(25%-16px)]">
            <a href="w-full ">
              <img src="./src/1.webp" className="rounded-2xl" />
            </a>
            <div className="flex items-center gap-2 text-xs mt-2">
              <span className="px-2 py-1 rounded-lg border border-neutral-300  text-neutral-300">
                프로그래밍
              </span>
              <span className="px-2 py-1 rounded-lg border border-neutral-300 text-neutral-300">
                프론트엔드
              </span>
              <span className="text-neutral-400 text-xl">|</span>
              <span className="px-2 py-1 rounded-lg border border-neutral-300 text-neutral-300">
                초급
              </span>
            </div>
            <p className="mt-3 font-bold">
              백엔드의 새로운 패러다임, Nest.js 커뮤니티 서비스 만들기
            </p>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex gap-3">
                <div className="flex items-center text-sm text-blue-400">
                  <ArrowDown size={16} />
                  <p className="ml-1">25%</p>
                </div>
                <p className="font-bold">79,000원</p>
              </div>
              <div className="flex items-center gap-1 text-neutral-400">
                <Heart size={18} className="text-red-600" />
                <p className="text-sm">10</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className=""></footer>
    </div>
  );
}
