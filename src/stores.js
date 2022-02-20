import { writable } from 'svelte/store';
import { browser } from '$app/env';

export const todos = writable((browser && localStorage.getItem('todos')) || []);

todos.subscribe((val) => browser && localStorage.setItem('todos', val));
