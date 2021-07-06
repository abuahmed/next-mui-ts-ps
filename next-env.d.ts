/// <reference types="next" />
/// <reference types="next/types/global" />
import { Theme } from '@material-ui/core/styles';

declare module '@material-ui/styles' {
    interface DefaultTheme extends Theme { }
}
