import { Controller, defineExpose } from 'forget-api/nest';
import { SystemService } from './system.service';

@Controller()
export class SystemController {
    constructor(private readonly sysService: SystemService) {}

    getMenus() {
        return [{}, {}, {}];
    }
}

export default defineExpose(SystemController);
