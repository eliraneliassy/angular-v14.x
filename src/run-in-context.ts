import { EnvironmentInjector, InjectionToken, createEnvironmentInjector } from '@angular/core';
export function runInContext<T>(injector: EnvironmentInjector, fn: () => T): T {
    const token = new InjectionToken<T>('TOKEN');
    const tmpInjector = createEnvironmentInjector([
        { provide: token, useFactory: () => fn }
    ], injector);

    return tmpInjector.get(token)
}