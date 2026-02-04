# hyeonjijulialee.github.io

Vite + React로 만든 사이트를 GitHub Pages에 배포합니다.

## 배포(필수 설정)

이 레포는 `dist`를 GitHub Actions로 빌드해서 Pages에 올리도록 되어 있습니다.

1. GitHub에서 레포로 이동
2. **Settings → Pages**
3. **Build and deployment → Source** 를 **GitHub Actions** 로 변경
4. `main` 브랜치에 push 하면 자동 배포됩니다.

## 로컬 실행

```bash
npm ci
npm run dev
```

## 로컬 빌드 확인

```bash
npm run build
npm run preview
```
