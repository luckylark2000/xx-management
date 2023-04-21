export interface MetaProps {
    key?: string,
    keepAlive?: boolean,
    title?: string,
    unwantedAuth?: boolean//是否需要进行校验
}

export interface RouterObject {
    path?: string,
    label?: string,
    key?: string,
    element?: React.ReactNode,
    children?: RouterObject[],
    meta?: MetaProps
}

export const matchRoute = (path: string, routes: RouterObject[] = []): RouterObject => {
    let result: RouterObject = {};
    for (let item of routes) {
        if (path === item.path) {
            result = item;
        }
        if (item.children) {
            const res = matchRoute(path, item.children);
            if (Object.keys(res).length) result = res;
        }
    }
    return result

}