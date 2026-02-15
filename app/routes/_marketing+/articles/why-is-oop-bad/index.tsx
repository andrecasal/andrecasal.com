import whyIsOOPBad from './why-is-oop-bad.jpg'
import { type LinksFunction, type MetaFunction } from '@remix-run/node'
import { type Post } from '../_index.tsx'
import { H1 } from '~/ui_components/typography/h1.tsx'
import { H2 } from '~/ui_components/typography/h2.tsx'
import { P } from '~/ui_components/typography/p.tsx'

export const post: Post = {
	title: 'Why is OOP bad',
	description: 'Learn about the downside of Object Oriented Programming and a better alternative.',
	imageUrl: whyIsOOPBad,
	date: '2025-05-11',
	href: '/articles/why-is-oop-bad',
	topics: ['OOP'],
}

export const links: LinksFunction = () => {
	return [{ rel: 'canonical', href: `https://andrecasal.com${post.href}` }]
}

export const meta: MetaFunction = () => {
	return [
		{ title: `${post.title} | Andre Casal` },
		{
			name: 'description',
			content: post.description,
		},
		{
			name: 'keywords',
			content: 'object oriented programming, oop, why is oop bad, functional programming, web development',
		},
	]
}

const WhyIsOOPBad = () => {
	return (
		<>
			<H1 size="4xl">{post.title}</H1>
			<div className="mt-8 max-w-3xl 2xl:max-w-4xl">
				<img src={whyIsOOPBad} alt="Why is OOP bad" className="rounded-2xl object-cover" />
				<P size="lg" className="mt-6">
					The software industry can act like a collection of religious movements, with Object-Oriented Programming (OOP) serving as one of its most established doctrines. For decades, OOP has been preached in universities and practiced in enterprises, promising salvation through encapsulation, inheritance, and polymorphism. Yet when we examine the evidence objectively, we find that OOP's theoretical benefits often fail to materialize in practice. Instead, we discover measurable costs: performance overhead, exponential testing complexity, and maintenance burdens that compound over time.
				</P>

				<H2 size="2xl" className="mt-12">
					The Performance Problem
				</H2>
				<P size="md" className="mt-6">
					Let's start with something measurable: performance. OOP advocates often dismiss performance concerns as "premature optimization," but the costs are real and quantifiable. Every method call in an object-oriented system requires multiple pointer dereferencing operations—essentially asking the CPU to make round trips to RAM to find where the actual code lives.
				</P>

				<div className="mt-6 rounded-lg bg-gray-100 p-4">
					<pre className="text-sm text-gray-800">
						{`// OOP approach - multiple indirections
calculator.getAdditionStrategy().execute(operand1, operand2);

// Direct approach - single operation
operand1 + operand2;`}
					</pre>
				</div>

				<P size="md" className="mt-6">
					The difference is stark: the OOP approach forces the CPU through a maze of indirection, while the direct approach executes in a single instruction. In isolation, this might seem trivial. In aggregate—across millions of operations in a real application—these costs become significant. Yet OOP proponents rarely discuss this trade-off openly.
				</P>

				<H2 size="2xl" className="mt-12">
					The Testing Explosion
				</H2>
				<P size="md" className="mt-6">
					Here's where OOP's theoretical benefits reveal their practical costs. The doctrine of single-responsibility classes sounds reasonable until you count the combinatorial explosion it creates. More classes require more interfaces. More interfaces require more mocks. More mocks require more test combinations. The testing surface area doesn't grow linearly—it grows exponentially. I've witnessed codebases where the test suite contains more lines of code than the actual implementation, creating a maintenance burden that slows development to a crawl.
				</P>

				<H2 size="2xl" className="mt-12">
					FizzBuzz: A Tale of Four Paradigms
				</H2>
				<P size="md" className="mt-6">
					Let's examine the classic FizzBuzz problem implemented in four different paradigms to understand the practical differences.
				</P>

				<H2 size="xl" className="mt-8">
					Object-Oriented: Over-Engineering Paradise
				</H2>
				<div className="mt-4 rounded-lg bg-gray-100 p-4">
					<pre className="text-sm text-gray-800">
						{`// Excerpt from the OOP version - just the entry point!
public class Main {
    public static void main(String[] args) {
        ApplicationContext context = 
            new ClassPathXmlApplicationContext("spring.xml");
        
        FizzBuzzEnterpriseEdition fizzBuzz = 
            context.getBean(FizzBuzzEnterpriseEdition.class);
        
        fizzBuzz.fizzBuzz();
    }
}`}
					</pre>
				</div>
				<P size="md" className="mt-4">
					This isn't satire—it's a faithful representation of enterprise OOP in practice. The "solution" requires Spring configuration files, abstract factories, strategy patterns, visitor patterns, and adapter patterns. The complete implementation spans dozens of classes, hundreds of lines of configuration, and requires intimate knowledge of multiple design patterns to understand. The problem it solves? Printing numbers 1 to 100 with simple substitution rules—something any programmer could implement in 10 lines of straightforward code.
				</P>

				<H2 size="xl" className="mt-8">
					Imperative: Simple and Direct
				</H2>
				<div className="mt-4 rounded-lg bg-gray-100 p-4">
					<pre className="text-sm text-gray-800">
						{`public class FizzBuzz {
    public static void main(String[] args) {
        for (int i = 1; i <= 100; i++) {
            if (i % 15 == 0) {
                System.out.println("FizzBuzz");
            } else if (i % 3 == 0) {
                System.out.println("Fizz");
            } else if (i % 5 == 0) {
                System.out.println("Buzz");
            } else {
                System.out.println(i);
            }
        }
    }
}`}
					</pre>
				</div>
				<P size="md" className="mt-4">
					Notice what happened to complexity: it vanished. The logic flows sequentially from top to bottom. There are no abstractions to learn, no patterns to decode, no configuration files to understand. Any programmer—regardless of experience level—can read this code and understand exactly what it does. Modifications are straightforward and locally contained.
				</P>

				<H2 size="xl" className="mt-8">
					Functional: Composable and Pure
				</H2>
				<div className="mt-4 rounded-lg bg-gray-100 p-4">
					<pre className="text-sm text-gray-800">
						{`private static final IntPredicate isDivisibleBy3 = n -> n % 3 == 0;
private static final IntPredicate isDivisibleBy5 = n -> n % 5 == 0;
private static final IntPredicate isDivisibleBy15 = 
    isDivisibleBy3.and(isDivisibleBy5);

private static final IntFunction<String> fizzBuzzMapper = n ->
    isDivisibleBy15.test(n) ? "FizzBuzz" :
    isDivisibleBy3.test(n) ? "Fizz" :
    isDivisibleBy5.test(n) ? "Buzz" :
    String.valueOf(n);

IntStream.rangeClosed(1, 100)
    .mapToObj(fizzBuzzMapper)
    .forEach(System.out::println);`}
					</pre>
				</div>
				<P size="md" className="mt-4">
					The functional approach achieves something OOP promises but rarely delivers: true modularity. Each function has a single, well-defined purpose. The predicates test divisibility conditions. The mapper transforms integers to strings. The stream handles iteration. Most importantly, each piece is pure—given the same inputs, it always produces the same outputs, with no hidden side effects to surprise you later.
				</P>

				<H2 size="xl" className="mt-8">
					Declarative: What, Not How
				</H2>
				<P size="md" className="mt-4">
					Declarative programming focuses on describing the desired outcome rather than the implementation steps. It often builds on imperative or functional foundations but
					abstracts away the "how."
				</P>
				<div className="mt-4 rounded-lg bg-gray-100 p-4">
					<pre className="text-sm text-gray-800">
						{`// Hypothetical declarative approach
FizzBuzzRule.builder()
    .range(1, 100)
    .when(divisibleBy(15), output("FizzBuzz"))
    .when(divisibleBy(3), output("Fizz"))
    .when(divisibleBy(5), output("Buzz"))
    .otherwise(outputNumber())
    .execute();`}
					</pre>
				</div>
				<P size="md" className="mt-4">
					This reveals an important truth that OOP evangelists often obscure: declarative programming doesn't eliminate complexity—it relocates it. Somewhere beneath this elegant API lies imperative or functional code handling the actual execution. But here's the crucial difference: the abstraction is intentional and focused. You're not forced to understand the implementation details unless you need to extend or debug the system.
				</P>

				<H2 size="2xl" className="mt-12">
					Why Functional Beats Imperative
				</H2>
				<P size="md" className="mt-6">
					Now let's examine why functional programming consistently produces fewer bugs than imperative approaches—something we can measure and verify:
				</P>
				<P size="md" className="mt-4">
					<strong>Immutability:</strong> Data cannot be modified after creation, eliminating entire classes of bugs related to unexpected state changes.
				</P>
				<P size="md" className="mt-4">
					<strong>Pure Functions:</strong> Functions with no side effects are predictable and easy to test. Given the same inputs, they always produce the same outputs.
				</P>
				<P size="md" className="mt-4">
					<strong>Referential Transparency:</strong> Function calls can be replaced with their results without changing program behavior, making reasoning about code
					straightforward.
				</P>

				<H2 size="2xl" className="mt-12">
					The Declarative Layer
				</H2>
				<P size="md" className="mt-6">
					Consider the most successful programming interfaces you use daily. SQL doesn't require you to understand B-trees or join algorithms—you describe what data you want, and the database figures out how to retrieve it efficiently. React's JSX doesn't require you to manipulate DOM nodes—you describe the UI structure, and React handles the updates. These succeed precisely because they hide complexity behind well-designed abstractions.
				</P>
				<P size="md" className="mt-6">
					This abstraction layer accelerates development because you work with higher-level concepts. However, understanding the underlying implementation remains valuable for
					debugging and optimization.
				</P>

				<H2 size="2xl" className="mt-12">
					A Balanced Perspective
				</H2>
				<P size="md" className="mt-6">
					Let's be clear: OOP isn't inherently evil. It emerged to solve real problems in large, complex codebases during an era when our alternatives were limited. The issue isn't that OOP never works—it's that software engineering doctrines can act like religions, with dogmatic adherence preventing us from evaluating alternatives objectively.
				</P>
				<P size="md" className="mt-6">
					Modern functional and declarative approaches often provide better solutions with measurably less complexity. But "often" isn't "always." The right choice depends on your specific context: team experience, performance requirements, maintenance constraints, and problem domain. What matters is making these decisions based on evidence rather than doctrine—measuring actual complexity, performance, and maintainability rather than accepting theoretical promises at face value.
				</P>
			</div>
		</>
	)
}
export default WhyIsOOPBad
