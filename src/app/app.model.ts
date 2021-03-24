import { Observable } from 'rxjs'

export type AsyncOptional<T> = Observable<T> | Promise<T> | T