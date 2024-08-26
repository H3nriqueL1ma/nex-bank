import {inject} from "@angular/core";
import {HttpInterceptorFn} from "@angular/common/http";
import {LoadingService} from "./LoadingService";
import {finalize} from "rxjs";

export const LoadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);

  loadingService.setLoading(true);

  return next(req).pipe(finalize(() => loadingService.setLoading(false)));
}
