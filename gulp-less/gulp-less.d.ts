// Type definitions for gulp-less
// Project: https://github.com/plus3network/gulp-less
// Definitions by: Keita Kagurazaka <https://github.com/k-kagurazaka>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "gulp-less" {

    interface IOptions {
        paths: string[];
        plugins?: any[];
    }

    function less(options?: IOptions): NodeJS.ReadWriteStream;

    export = less;
}
