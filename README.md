### 개요
 - React Native 기반 앱을 개발하기 위한 템플릿입니다.

### 사용 시 체크사항
1. **iOS**:
   - Xcode에서 프로젝트 열기.
   - `General` 탭에서 `Display Name` 변경.
   - `info.plist`에서 `CFBundleName` 변경.

2. **Android**:
   - `strings.xml`에서 `<string name="app_name">` 변경.
   - `AndroidManifest.xml`에서 `android:label` 변경.

3. **선택 사항**:
   - 프로젝트 디렉토리 이름 변경.
   - `package.json`에서 `name` 필드 변경.
   - `ios/Podfile`에서 타겟 이름 변경.
   - npm 캐시 정리 및 ios 모듈 재설치.
    ```
    npm cache clean --force
    npm install
    cd ios
    pod install
    ```
   - 프로젝트 다시 빌드.