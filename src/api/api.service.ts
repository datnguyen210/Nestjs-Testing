import { Student } from './../student/student.service';
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios/dist';

@Injectable()
export class ApiService {
    constructor(private readonly httpService: HttpService) { }
    async getStudent(firstName: string, lastName: string): Promise<Student> {
        const url = `http://localhost:3000/get-student?firstName=${firstName}&lastName=${lastName}`;
        const response = await this.httpService.get(url).toPromise();
        return response.data
    }

    getHello(): string {
        return 'Hello World!'
    }

}
