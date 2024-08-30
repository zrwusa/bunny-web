import {describe, expect, it} from 'vitest';
import {toCamelCase, toPascalCase, toSeparatedCase, toSnakeCase} from "./string";

describe('String Conversion Utilities', () => {
    describe('toCamelCase', () => {
        it('should convert space-separated string to camelCase', () => {
            expect(toCamelCase('hello world example')).toBe('helloWorldExample');
        });

        it('should convert hyphen-separated string to camelCase', () => {
            expect(toCamelCase('hello-world-example')).toBe('helloWorldExample');
        });

        it('should convert underscore-separated string to camelCase', () => {
            expect(toCamelCase('hello_world_example')).toBe('helloWorldExample');
        });

        it('should handle mixed separators and capitalization', () => {
            expect(toCamelCase('Hello-World example_STRING')).toBe('helloWorldExampleString');
        });
    });

    describe('toSnakeCase', () => {
        it('should convert space-separated string to snake_case', () => {
            expect(toSnakeCase('hello world example')).toBe('hello_world_example');
        });

        it('should convert hyphen-separated string to snake_case', () => {
            expect(toSnakeCase('hello-world-example')).toBe('hello_world_example');
        });

        it('should convert camelCase string to snake_case', () => {
            expect(toSnakeCase('helloWorldExample')).toBe('hello_world_example');
        });

        it('should handle mixed separators and capitalization', () => {
            expect(toSnakeCase('Hello-World example_STRING')).toBe('hello_world_example_string');
        });
    });

    describe('toSeparatedCase', () => {
        it('should convert camelCase string to hyphen-separated string', () => {
            expect(toSeparatedCase('helloWorldExample', '-')).toBe('hello-world-example');
        });

        it('should convert snake_case string to hyphen-separated string', () => {
            expect(toSeparatedCase('hello_world_example', '-')).toBe('hello-world-example');
        });

        it('should convert space-separated string to dot-separated string', () => {
            expect(toSeparatedCase('hello world example', '.')).toBe('hello.world.example');
        });

        it('should handle mixed separators and capitalization', () => {
            expect(toSeparatedCase('HelloWorld_Example STRING', '_')).toBe('hello_world_example_string');
        });
    });


    describe('toPascalCase', () => {
        it('should convert space-separated string to PascalCase', () => {
            expect(toPascalCase('hello world example')).toBe('HelloWorldExample');
        });

        it('should convert hyphen-separated string to PascalCase', () => {
            expect(toPascalCase('hello-world-example')).toBe('HelloWorldExample');
        });

        it('should convert underscore-separated string to PascalCase', () => {
            expect(toPascalCase('hello_world_example')).toBe('HelloWorldExample');
        });

        it('should handle mixed separators and capitalization', () => {
            expect(toPascalCase('Hello-World example_STRING')).toBe('HelloWorldExampleString');
        });
    });
});
