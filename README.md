# Wirtualna_Polska

Portal informacyjny zbudowany na Nuxt.js 3 z Vue 3.

## Struktura projektu

Projekt używa struktury folderu `app/` zgodnie z konwencją Nuxt 3:
- `app/` - główny folder aplikacji
  - `assets/` - pliki statyczne (style SCSS i skompilowane CSS)
  - `components/` - komponenty Vue
  - `composables/` - composables (logika wielokrotnego użytku)
  - `pages/` - strony aplikacji
  - `app.vue` - główny layout aplikacji

## Instalacja i uruchomienie

### 1. Instalacja zależności

```bash
npm install
```

### 2. Konfiguracja Sass Live Compiler (VS Code)

Projekt używa wtyczki **Sass Live Compiler** do automatycznej kompilacji plików SCSS do CSS.

**Ważne:** Przed uruchomieniem aplikacji musisz skompilować pliki SCSS do CSS:

1. Zainstaluj wtyczkę **"Live Sass Compiler"** (Glenn Marks) w VS Code
2. Otwórz plik `app/assets/styles/main.scss`
3. Kliknij przycisk **"Watch Sass"** w prawym dolnym rogu VS Code (lub użyj skrótu `Ctrl+Shift+P` → "Live Sass: Watch Sass")
4. Wtyczka automatycznie wygeneruje pliki `main.css` i `main.css.map` w folderze `app/assets/styles/`

**Uwaga:** Nuxt używa skompilowanych plików CSS, więc musisz mieć wygenerowane pliki `.css` przed uruchomieniem aplikacji.

### 3. Uruchomienie aplikacji w trybie deweloperskim

```bash
npm run dev
```

Aplikacja będzie dostępna pod adresem: `http://localhost:3000`

### 3. Build produkcyjny

```bash
npm run build
```

### 4. Preview buildu produkcyjnego

```bash
npm run preview
```

## Praca z Git i branchami

### Pobieranie kodu z brancha main do swojego brancha

Każdy członek zespołu ma swój własny branch nazwany swoimi inicjałami (np. `SS` dla Szymon Spychała).

#### Krok 1: Sprawdź aktualny branch

```bash
git branch
```

#### Krok 2: Przełącz się na swój branch (jeśli jeszcze nie istnieje, utwórz go)

```bash
# Jeśli branch już istnieje
git switch TWOJE_INICJALY

# Jeśli branch nie istnieje, utwórz go
git checkout -b TWOJE_INICJALY
```

#### Krok 3: Pobierz najnowsze zmiany z brancha main

```bash
# Najpierw upewnij się, że jesteś na swoim branchu
git switch TWOJE_INICJALY

# Pobierz zmiany z main
git fetch origin main

# Zmerguj zmiany z main do swojego brancha
git merge origin/main
```

Alternatywnie, możesz użyć rebase (jeśli wolisz liniową historię):

```bash
git rebase origin/main
```

#### Krok 4: Rozwiąż konflikty (jeśli wystąpią)

Jeśli podczas merge/rebase wystąpią konflikty:
1. Otwórz pliki z konfliktami
2. Rozwiąż konflikty ręcznie
3. Dodaj rozwiązane pliki: `git add .`
4. Zakończ merge: `git commit` (lub `git rebase --continue` dla rebase)

### Podstawowe komendy Git

```bash
# Klonowanie repozytorium
git clone https://github.com/loczek7/Wirtualna_Polska.git

# Sprawdzenie aktualnego brancha
git branch

# Przełączenie na branch
git switch nazwa_brancha

# Dodanie wszystkich zmian i commit
git add .
git commit -m "Opis zmian"

# Pobranie zmian z repozytorium
git pull

# Wysłanie zmian na repozytorium
git push
```

## Ważne informacje

1. **Każdy ma swój branch** - pracuj na branchu ze swoimi inicjałami
2. **Main branch** - tylko osoba zarządzająca commituje bezpośrednio na main
3. **Commity** - pisz jasne i zrozumiałe komunikaty commitów
4. **Pytania** - w razie pytań pisz na Discordzie lub Messengerze

## Technologie

- **Nuxt.js 3** - framework Vue.js
- **Vue 3** - framework JavaScript
- **SCSS** - preprocesor CSS (kompilowany do CSS przez Sass Live Compiler)
- **TypeScript** - typowany JavaScript

**Uwaga:** Projekt używa skompilowanych plików CSS (generowanych przez Sass Live Compiler), nie bezpośrednio plików SCSS.

## Struktura komponentów

- `AppHeader.vue` - nagłówek z logo, wyszukiwarką i akcjami
- `WeatherWidget.vue` - widget pogody
- `CategoryMenu.vue` - menu kategorii
- `HeroSection.vue` - sekcja hero
- `NewsGrid.vue` - siatka wiadomości
- `AppFooter.vue` - stopka
- `AdBanner.vue` - banery reklamowe

## Composables

Composables są przechowywane w folderze `app/composables/`:
- `useWeather.ts` - obsługa widgetu pogody (OpenWeather API)
- `useSearch.ts` - obsługa wyszukiwarki

Nuxt automatycznie importuje composables z folderu `composables/` - nie trzeba ich ręcznie importować.
