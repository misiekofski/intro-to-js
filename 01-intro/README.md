# Wprowadzenie do JS - Ćwiczenia

## Zadanie 1
Kod JS napisz w tagu <script></script>
1. Utwórz zmienną const name ze swoim imieniem (zmienna name)
2. Napisz kod który wypisze w konsoli zdefiniowaną zmienną
3. Uruchom przeglądarkę i znajdź miejsce w którym wypisała się ta zmienna
4. Dopisz w skrypcie zmienną x = 42 oraz y = "42".
5. Napisz kod który wypisze w konsoli obydwie zdefiniowane zmienne.
6. Czy widzisz różnice w drukowaniu zmiennych x, oraz y?

## Zadanie 2
Stwórz zmienne które przechowują poniższe typy danych:
- Undefined
- Null
- String
- Number
- Boolean
- NaN

## Zadanie 3a
1. Utwórz tablicę imion
2. Utwórz tablicę liczb
3. Utwórz tablicę danych mieszanych (Boolean, String, Number, Bigint)
4. Wypisz pierwszy element z tablicy imion
5. Wypisz ostatni element tablicy liczb
6. Wypisz przedostatni element tablicy danych mieszanych


## Zadanie 3b
1. Utwórz tablicę imion i nazwisk np. ["John Doe", "Kamil Ślimak", "Jan Kowalski", "Jan Abratek"]
2. Posortuj tablicę
3. *Dla każdego imienia wypisz inicjały

Podpowiedź:
```javascript
name.split(' '); // Podzieli nam imię "John Doe" na tablicę ["John", "Doe"]
console.log("John"[0]); // String też traktujemy jako tablicę znaków
```

## Zadanie 4a
1. Napisz funkcję, która drukuje informacje o użytkowniku z trzech zmiennych (firstName, lastName, age) w postaci "Jan Kowalski, lat: 30"
2. Napisz funkcję, która (zamiast drukować) zwraca napis w postaci "Jan Kowalski, lat: 30"
3. Dodaj trzech użytkowników zwróconych z drugiej funkcji do tablicy `users = []`
4. Czy mógłbyś wykorzystać do tego funkcję z punktu pierwszego?


## Zadanie 4b
1. Utwórz plik `funkcje.js` i zaimportuj go do htmla.
2. W tym pliku napisz funkcję `function jobPost()` wypisującą (nie zwracającą) przynajmniej jednolinijkową reklamę pracy w x-kom.
3. Uruchom html w przeglądarce i zobacz czy funkcja się wypisała.
4. Co trzeba zrobić żeby reklama się pojawiła w konsoli?

## Zadanie 5
1. Stwórz tablicę produktów (stringów)
2. Napisz funkcję która wypisze ilość znaków każdego produktu w postaci "Nazwa produktu: x znaków"
3. Postaraj użyć się funkcji .map() oraz arrow function.


## Zadanie 6a
1. Utwórz obiekt user z parametrami:
- login (string)
- password (string)
- is_active (true/false)
- email (string)
2. Stwórz funkcję, która jako parametr przyjmuje obiekt User, a następnie wypisuje w konsoli:
- "Logowanie użytkownika: login"
- "Hasłem: password"
- "Status użytkownika: aktywny/nieaktywy, email użytkownika: email"

## Zadanie 7
1. Napisz klasę Car (używając składni ES6)
2. Zdefiniuj w niej producenta, markę i przebieg w konstruktorze.
3. Napisz funkcję która zwraca cenę dziennego wynajmu (`getPrice()`). Domyślnie koszt każego samochodu to 200 zł / dzień.
4. Utwórz trzy różne samochody i wywołaj na nich metodę zwracającą cenę.


## Zadanie 8
Użyj kodu z zadania 7. Wprowadź następujące ulepszenia metody `getPrice()`
1. Jeżeli przebieg samochodu jest mniejszy niż 10 000 km to cena wynajmu dziennego wzrasta o 20%.
2. Jeżeli przebieg samochodu jest większy niż 100 000 km to cena wynajmu dziennego spada o 15%.
3. Jeżeli producent samochodu to "Honda", to cena wynajmu rośnie o 10%.
4. Jeżeli marka samochodu to "Multipla", to wynajem auta nie kosztuje nic.


## Zadanie 9a
Napisz funkcję sumNumbers(x,y), która policzy sumę wszystkich liczb w przedziale od x do y.
Przykład: dla `x=3`, `y=11` suma to `3+4+5+6+7+8+9+10+11=63`


## Zadanie 9b
Napisz funkcję getAvgFromEven(arr), która jako parametr przyjmuje tablicę a następnie liczy średnią z liczb parzystych.
Przykład: dla `[1, 2, 3, 4, 5, 6]` średnia to `(2 + 4 + 6)/3 = 4`