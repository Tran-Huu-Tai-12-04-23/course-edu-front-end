import axios, { AxiosInstance, AxiosResponse } from 'axios';

class UploadImgAPI {
    private apiUrl: string;
    private apiKey: string;
    private baseUrl: string;
    private client: AxiosInstance;

    constructor() {
        this.apiUrl = 'https://api.imgbb.com/1/upload';
        this.apiKey = '5d5efefbe072ed037f95dc62c9143141';
        this.baseUrl = `${this.apiUrl}?key=${this.apiKey}`;

        this.client = axios.create({
            baseURL: this.baseUrl,
        });

        this.client.interceptors.response.use(this.handleSuccess, this.handleError);
    }

    private handleSuccess(response: AxiosResponse): any {
        return response.data;
    }

    private handleError(error: any): Promise<any> {
        if (error.response) {
            // Handle HTTP response error
            return Promise.reject(error.response.data);
        } else if (error.request) {
            // Handle request error
            return Promise.reject('Network error. Please try again later.');
        } else {
            // Handle other errors
            return Promise.reject('An error occurred. Please try again later.');
        }
    }

    async uploadImg(dataImg: File, nameImg: string): Promise<any> {
        const formData = new FormData();
        formData.append('image', dataImg);
        formData.append('name', nameImg);

        try {
            const response = await this.post(this.apiUrl, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return response;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    private get(subURL: string): Promise<AxiosResponse> {
        return this.client.get(subURL);
    }

    private post(subURL: string, data: FormData, config?: object): Promise<AxiosResponse> {
        return this.client.post(subURL, data, config);
    }

    private delete(subURL: string): Promise<AxiosResponse> {
        return this.client.delete(subURL);
    }

    private put(subURL: string, data: any): Promise<AxiosResponse> {
        return this.client.put(subURL, data);
    }
}

export default new UploadImgAPI();
