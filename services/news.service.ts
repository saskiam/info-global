
import { NewsArticle } from "./news.types";

/** 
 * @returns {Promise<NewsArticle[]>}
 * automaticamente se encarga de hacer la llamada
 * a la url definida en DATA_URL en el archivo .env
 * */

export async function getNews(): Promise<NewsArticle[]> {
    const dataURL = process.env.DATA_URL;

    // Verificar que la url exista
    if (!dataURL) {
        throw new Error("La url DATA_URL no está definida");
    }
    const response = await fetch(
        dataURL, 
        {
            method: "GET",
            cache: "no-cache",

        }
    );

    // Verificar que la respuesta sea exitosa
    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const news: NewsArticle[] = await response.json();
    return news;
}