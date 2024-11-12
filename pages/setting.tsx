export default function Setting() {
  return (
    <div>
      ecma script 문법 검사기
      대규모 프로젝트에서 타인과 협업할때 에러와 코딩 스타일 통일성을 위해서 사용함

      eslint version
      8.57.1 2024-10-05 지원종료 node.js ^12.22.0, ^14.17.0  16.0.0 이상 지원
      설치 방법
      npm install --save-dev eslint@version
      eslintrc(js, json)
      npm eslint --init(eslintrc 파일 추가)

      9.x.x 현재 진행중 node.js ^18.18.0, ^20.9.0 또는 21.1.0 이상 지원
      pnpm create @eslint/config@latest
      npm init @eslint/conifg@latest

      eslint 설치 방법

      npm install --save-dev eslint-config-prettier //eslint와 prettier의 규칙 충돌 방지
      pnpm add --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint typescript

      pnpm install -D prettier eslint-config-prettier eslint-plugin-prettier prettier-plugin-tailwindcss eslint-plugin-tailwindcss

      npm info package-name peerDependencies (종속성 확인)

      prettier 설치

      pnpm add --save-dev preiiter

      jest 설치
      pnpm add --save-dev jest

      fsd(설계 방법론)
    </div>
  )
}
