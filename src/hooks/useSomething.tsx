import { useEffect } from 'react';

/**
 * 임시로 작성한 hook 예시 입니다.
 *
 * @returns "something"
 */
const useSomething = () => {
    useEffect(() => {
        console.log('hook called');
    }, []);

    return ['something'];
};

export default useSomething;
