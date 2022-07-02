// 이 모듈은, 만약에 파라미터가 객체형태로 들어오면 자동으로 JSON.stringify 를 해주고,
// 일반 문자열이라면 그대로 조회를 할 때도 마찬가지로 객체형태라면 자동으로 파싱

const storage = {
    set: (key, object) => {
        if(!localStorage) return;
        localStorage[key] = (typeof object) === 'string' ? object : JSON.stringify(object);
    },
    get: (key) => {
        if(!localStorage) return null;

        if(!localStorage[key]) {
            return null;
        }

        try {
            const parsed = JSON.parse(localStorage[key]);
            return parsed;
        } catch(e) {
            return localStorage[key];
        }
    },
    remove: (key) => {
        if(!localStorage) return null;

        if(localStorage[key]) {
            localStorage.removeItem(key);
        }
    }
};

export default storage;