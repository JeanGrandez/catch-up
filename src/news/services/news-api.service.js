import axios from 'axios';
import {LogoApiService} from '../../shared/services/logo-api.service';
const http = axios.create({
    baseURL: 'https://newsapi.org/v2',
});
const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;
export class NewsApiService {
    api_key = NEWS_API_KEY;
    logoApi = new LogoApiService();
    getSource(){
        return http.get(`/top-headlines/sources?apiKey=${this.api_key}`);
    }
    getArticleForSource(sourceId){
        return http.get(`/top-headlines?sources=${sourceId}&apiKey=${this.api_key}`);
    }
    getUrlToLogo(source){
        return this.logoApi.getUrlToLogo(source);
    }
}