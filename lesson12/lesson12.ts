/* Домашнее задание №1: Создание Partial и фильтрация полей
Создайте интерфейс Event с полями id, name, date, и location.
Используя Mapped Types, создайте новый тип OptionalEvent, где все поля будут опциональными (используйте утилиту Partial).
Напишите функцию, которая принимает объект Event и возвращает его копию типа OptionalEvent. */
// home work 1
interface Events {
    id: number;
    name: string;
    date: string;
    location: string;
}

type OptionalEvent = Partial<Events>;

function transformToOptionalEvent(event: Events): OptionalEvent {
    return {...event};
}

const events: Events = {
    id: 123,
    name: 'Nana',
    date: '12.12.2024',
    location: 'ru',
}

console.log(transformToOptionalEvent(events));

// end home work 1

/* Домашнее задание №2: Условные типы и пересечение типов
Создайте два интерфейса:
VideoContent с полями title, duration, и isHD.
AudioContent с полями title, duration, и isPodcast.
Используя Conditional Types, создайте тип ContentType<T>, который:
Если передан тип VideoContent, вернет строку "video".
Если передан тип AudioContent, вернет строку "audio".
Напишите функцию, которая принимает либо VideoContent, либо AudioContent и возвращает строку типа контента, используя тип ContentType. */

interface VideoContent {
    title: string;
    duration: string;
    isHD: boolean;
}

interface AudioContent {
    title: string;
    duration: string;
    isPodcast: boolean;
}

type ContentType<T> = T extends VideoContent ? "video" : T extends AudioContent ? "audio" : "unknown";

function getContentType<T extends VideoContent | AudioContent>(content: T): ContentType<T> {
    if(content.hasOwnProperty('isHD')) return "video" as ContentType<T>;
    if(content.hasOwnProperty('isPodcast')){
        return "audio" as ContentType<T>
    } else {
        return "unknow" as ContentType<T>;
    }
}

const firstContent: VideoContent = {
    title: 'test',
    duration: '123',
    isHD: true,
}

const secondContent: AudioContent = {
    title: 'test2',
    duration: '50',
    isPodcast: true,
}

console.log(getContentType(firstContent));
console.log(getContentType(secondContent));

/* Домашнее задание №3: Использование Exclude и Extract
Создайте интерфейс UserRoles с полями id, name, и role.
Создайте перечисление (enum) с ролями ADMIN, USER, и GUEST.
Используя утилиты Exclude и Extract, создайте два типа:
AdminRole — содержит только ADMIN.
NonAdminRoles — содержит только USER и GUEST.
Напишите функцию, которая принимает роль и возвращает соответствующее сообщение, используя эти типы. */

// home work 3
interface UserRoles {
    id: number;
    name: string;
    role: string;
}



// end home work3 