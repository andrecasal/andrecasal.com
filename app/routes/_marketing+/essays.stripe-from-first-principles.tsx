import { Link, type MetaFunction } from '@remix-run/react'
import { Icon } from '~/components/ui/icon.tsx'
import { Blockquote } from '~/ui_components/typography/blockquote.tsx'
import { Code } from '~/ui_components/typography/code.tsx'
import { Em } from '~/ui_components/typography/em.tsx'
import { H2 } from '~/ui_components/typography/h2.tsx'
import { H3 } from '~/ui_components/typography/h3.tsx'
import { Hr } from '~/ui_components/typography/hr.tsx'
import { P } from '~/ui_components/typography/p.tsx'
import { Pre } from '~/ui_components/typography/pre.tsx'
import { Strong } from '~/ui_components/typography/strong.tsx'
import { Ul } from '~/ui_components/typography/ul.tsx'

const sections = [
	{ id: 'how-money-moves', title: 'How Money Moves on the Internet' },
	{ id: 'map-of-the-terrain', title: 'Map of the Terrain' },
	{ id: 'payment-intents', title: 'Payment Intents' },
	{ id: 'webhooks', title: 'Webhooks' },
	{ id: 'payment-methods', title: 'Payment Methods' },
	{ id: 'customers', title: 'Customers' },
	{ id: 'products-and-prices', title: 'Products and Prices' },
	{ id: 'checkout-and-elements', title: 'Checkout and Elements' },
	{ id: 'subscriptions-and-billing', title: 'Subscriptions and Billing' },
	{ id: 'connect', title: 'Connect' },
	{ id: 'disputes-and-fraud', title: 'Disputes and Fraud' },
	{ id: 'payouts', title: 'Payouts' },
]

const title = 'Stripe from First Principles | André Casal'
const description =
	'A first-principles guide to Stripe. Builds your mental model layer by layer — from how money moves, through Payment Intents, webhooks, payment methods, checkout, subscriptions, Connect, disputes, and payouts — so you can reason about payment systems instead of cargo-culting documentation.'

export const meta: MetaFunction = () => [
	{ title },
	{ name: 'description', content: description },
	{ property: 'og:title', content: title },
	{ property: 'og:description', content: description },
	{ property: 'og:url', content: 'https://andrecasal.com/essays/stripe-from-first-principles' },
	{ property: 'twitter:card', content: 'summary_large_image' },
]

export default function Route() {
	return (
		<>
			{/* Back to top (CSS-only: scroll-driven animation for visibility, anchor for scroll) */}
			<Link to="#top" className="back-to-top" aria-label="Back to top">
				<Icon name="arrow-up" size="md" />
			</Link>

			{/* Hero */}
			<div id="top" className="pb-16 pt-12 lg:pb-8">
				<Link
					to="/essays"
					className="inline-flex items-center gap-2 text-size-sm text-muted-500 transition-colors hover:text-brand"
				>
					<Icon name="arrow-left" size="sm" />
					Essays
				</Link>
				<p className="mt-10 text-size-xs font-semibold uppercase tracking-wider text-brand">Guide</p>
				<h1 className="mt-3 text-size-4xl font-bold tracking-tight text-muted-900">
					Stripe from First Principles
				</h1>
				<p className="mt-6 max-w-prose text-size-xl leading-relaxed tracking-tight text-muted-600">
					Every layer in this guide builds on the last. By the end, you'll have a complete mental model of how Stripe works — so you can reason about
					payment systems instead of blindly following documentation.
				</p>
				<div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-size-sm text-muted-400 dark:text-muted-500">
					<span>André Casal</span>
					<span aria-hidden="true">·</span>
					<span>45 min read</span>
					<span aria-hidden="true">·</span>
					<time dateTime="2026-02-28">Feb 28, 2026</time>
				</div>
			</div>

			{/* Table of Contents (hidden on lg+ where sidebar TOC is visible) */}
			<div className="border-y border-muted-200 py-8 lg:hidden">
				<nav>
					<p className="text-size-sm font-semibold text-muted-900">In this article</p>
					<ol className="mt-4 grid grid-cols-1 gap-y-2 text-size-sm">
						{sections.map((section, i) => (
							<li key={section.id}>
								<Link
									to={`#${section.id}`}
									className="text-muted-600 transition-colors hover:text-brand"
								>
									<span className="mr-2 text-muted-300 dark:text-muted-600">{String(i + 1).padStart(2, '0')}</span>
									{section.title}
								</Link>
							</li>
						))}
					</ol>
				</nav>
			</div>

			{/* Article */}
			<div className="article-toc-scope py-16 lg:flex lg:gap-16 lg:pt-8">
				<div className="essay-body min-w-0 max-w-prose">
					{/* ───────────────── Section 1 ───────────────── */}
					<H2 id="how-money-moves" className="mt-0 scroll-mt-24">
						How Money Moves on the Internet
					</H2>
					<P>
						Stripe is a middleman between credit cards and bank accounts. A customer's card is charged. The money lands in the business's Stripe
						balance — a virtual wallet Stripe holds for you. Periodically, Stripe moves that balance to the business's real bank account. That
						movement is called a <Strong>payout</Strong>.
					</P>
					<Pre>
						<Code>{`  Customer ────$50────► Stripe ────$48.55────► Business's Bank
                        keeps $1.45
                        (2.9% + $0.30)`}</Code>
					</Pre>
					<P>
						Stripe takes a processing fee on every charge. This is how they make money. The fee is deducted before money reaches the business's
						balance.
					</P>
					<Pre>
						<Code>{`                        STRIPE
                   ┌─────────────────┐
  Customer pays    │                 │    Payout (automatic, free)
  ──────────────►  │  Stripe Balance │   ────────────────────────►  Bank Account
      $50          │     $48.55      │          $48.55
                   └─────────────────┘
                  (fee already deducted)`}</Code>
					</Pre>
					<P>
						Standard payouts are free. Stripe already made its money on the processing fee. That's all Stripe does for a single business: charge
						cards, hold money, pay out to bank.
					</P>

					<Hr />

					{/* ───────────────── Section 2 ───────────────── */}
					<H2 id="map-of-the-terrain" className="scroll-mt-24">
						Map of the Terrain
					</H2>
					<P>
						Before we dive deeper, let's see the whole landscape. When you strip away the branding and documentation, every business that accepts
						payments online faces three questions:
					</P>
					<Ul>
						<li>
							<P>
								<Strong>How does money move?</Strong> — the infrastructure
							</P>
						</li>
						<li>
							<P>
								<Strong>How do buyers experience paying?</Strong> — the interface
							</P>
						</li>
						<li>
							<P>
								<Strong>What am I selling?</Strong> — the business model
							</P>
						</li>
					</Ul>
					<P>
						Stripe's entire product surface maps to these three questions — plus a fourth layer for everything that happens after money moves.
					</P>
					<Pre>
						<Code>{`  STRIPE — THE COMPLETE MAP

  ┌─────────────────────────────────────────────────────────────┐
  │  Layer 1: The Pipes (everyone needs this)                   │
  │                                                             │
  │  Payment Intents    →  "Move money from A to B"             │
  │  Payment Methods    →  "How the money travels"              │
  │  Webhooks           →  "What happened"                      │
  │  Customers          →  "Who's paying"                       │
  └─────────────────────────────────────────────────────────────┘
            ▲ everything above is infrastructure
            ▼ everything below is your choice
  ┌─────────────────────────────────────────────────────────────┐
  │  Layer 2: The Interface (how buyers pay)                    │
  │                                                             │
  │  Payment Links   →  A URL (zero code)                       │
  │  Checkout        →  Stripe-hosted page (low code)           │
  │  Elements        →  Embedded components (medium code)       │
  │  Custom UI       →  Raw API (full code)                     │
  └─────────────────────────────────────────────────────────────┘
  ┌─────────────────────────────────────────────────────────────┐
  │  Layer 3: The Business Model (what you sell)                │
  │                                                             │
  │  Products + Prices    →  One-time purchases                 │
  │  Subscriptions        →  Recurring billing                  │
  │  Connect              →  Multi-party / marketplace          │
  │  Invoicing            →  B2B billing                        │
  └─────────────────────────────────────────────────────────────┘
  ┌─────────────────────────────────────────────────────────────┐
  │  Layer 4: After the Money Moves                             │
  │                                                             │
  │  Disputes & Fraud     →  Chargebacks, Radar                 │
  │  Refunds              →  Returning money                    │
  │  Payouts              →  Stripe balance → your bank         │
  │  Tax & Reporting      →  Compliance                         │
  └─────────────────────────────────────────────────────────────┘`}</Code>
					</Pre>
					<P>
						Layer 1 is infrastructure — every Stripe integration uses it. Layer 4 applies to everyone eventually. Layers 2 and 3 are where your
						decisions live. You choose an interface and a business model.
					</P>
					<Pre>
						<Code>{`  Where do I start?

  What are you building?
  │
  ├─► I sell things directly to customers
  │   │
  │   ├─► One-time purchases  →  Products + Prices (section 7)
  │   └─► Recurring billing   →  Subscriptions (section 9)
  │
  └─► Others sell through my platform  →  Connect (section 10)

  How should buyers experience payment?
  │
  ├─► I just need a link to send people       →  Payment Links
  ├─► A hosted checkout page is fine          →  Checkout
  ├─► It must look like my brand              →  Elements
  └─► I'll build everything from scratch      →  Custom UI (rarely needed)`}</Code>
					</Pre>
					<P>
						The rest of this article walks each layer from the ground up. At every point, you'll know exactly where you are on this map.
					</P>

					<Hr />

					{/* ───────────────── Section 3 ───────────────── */}
					<H2 id="payment-intents" className="scroll-mt-24">
						Payment Intents
					</H2>
					<P>
						The core of Stripe's API is the Payment Intent. To understand why it exists, consider what happens when a customer pays:
					</P>
					<Ul>
						<li>
							<P>Your server tells Stripe "I want to collect $50 from this customer"</P>
						</li>
						<li>
							<P>The customer's bank might need to verify the charge (3D Secure, bank redirect)</P>
						</li>
						<li>
							<P>Some time passes — milliseconds for cards, days for bank transfers</P>
						</li>
						<li>
							<P>The charge succeeds or fails</P>
						</li>
					</Ul>
					<P>
						That third step is why Payment Intents exist. Stripe's older API (the Charges API) assumed payments were synchronous — you called the
						API, got back success or failure, done. But the world changed. EU regulation (SCA/PSD2) requires 3D Secure for many card payments — a
						popup the customer must interact with. Bank debits take days to settle. Wallets have their own confirmation flows.
					</P>
					<P>
						A charge is no longer a single API call. It's a process that unfolds over time. A <Strong>Payment Intent</Strong> represents that
						process — the <Em>intention</Em> to collect money, not the money itself.
					</P>
					<Pre>
						<Code>{`  The Payment Intent lifecycle:

  create ──► requires_payment_method ──► requires_confirmation
                                               │
                                               ▼
                                          processing
                                           │      │
                                           ▼      ▼
                                      succeeded  requires_action
                                                      │
                                                      ▼
                                              (customer completes
                                               3D Secure / redirect)
                                                      │
                                                      ▼
                                                 processing
                                                  │      │
                                                  ▼      ▼
                                             succeeded  payment_failed`}</Code>
					</Pre>
					<P>
						The mental model: a Payment Intent is a state machine. You create it, the customer confirms it, and then things happen asynchronously.
						You don't drive the outcome — you react to state transitions.
					</P>
					<P>
						This is why webhooks (next section) are essential. The state might change minutes or days after you created the intent.
					</P>

					<H3>Authorization vs. Capture</H3>
					<P>
						By default, a successful Payment Intent both authorizes and captures — the customer's card is charged and money moves immediately. But
						you can separate these steps:
					</P>
					<Pre>
						<Code>{`  stripe.paymentIntents.create({
    amount: 5000,
    currency: 'usd',
    capture_method: 'manual',  // authorize only, capture later
  })`}</Code>
					</Pre>
					<P>
						Authorization places a hold on the customer's card without moving money. Capture completes the transfer. This matters for businesses
						where the final amount isn't known at checkout — hotels, car rentals, restaurants with tips — or where you need to confirm availability
						before charging.
					</P>
					<P>
						The hold expires after 7 days (or 31 for some card types). If you don't capture, the customer's funds are released automatically.
					</P>

					<Hr />

					{/* ───────────────── Section 4 ───────────────── */}
					<H2 id="webhooks" className="scroll-mt-24">
						Webhooks
					</H2>
					<P>
						Payment Intents are state machines that transition asynchronously. The question is: how does your server learn about those transitions?
					</P>
					<P>
						The naive answer is polling — periodically call the API to check the status. This doesn't work for payments. You'd waste thousands of
						API calls checking statuses that haven't changed. If your poller crashes, you miss the transition entirely. And it doesn't scale: N
						pending payments multiplied by polling frequency equals too many API calls.
					</P>
					<P>
						Stripe's answer is <Strong>webhooks</Strong>: when a state change happens, Stripe sends an HTTP POST to your server with the event
						details.
					</P>
					<Pre>
						<Code>{`  Customer ──► confirms 3D Secure ──► Stripe processes payment
                                             │
                                             ▼
                                     payment_intent.succeeded
                                             │
                                     POST to your server
                                             │
                                             ▼
                                     Your server updates order status`}</Code>
					</Pre>
					<P>Three things to understand about webhooks:</P>
					<P>
						<Strong>Signature verification.</Strong> Every webhook includes a cryptographic signature. You verify it using your webhook secret to
						ensure the event came from Stripe, not an attacker. Stripe's SDK handles this — one function call.
					</P>
					<P>
						<Strong>At-least-once delivery.</Strong> Stripe guarantees it will deliver the event at least once. But it might deliver it more than
						once — network retries, timeouts, your server returning a 500. Your webhook handler must be <Strong>idempotent</Strong>: processing the
						same event twice must produce the same result as processing it once.
					</P>
					<P>
						<Strong>The events you care about.</Strong> Stripe emits hundreds of event types. You subscribe only to what you need.{' '}
						<Code>payment_intent.succeeded</Code> tells you money was collected. <Code>payment_intent.payment_failed</Code> tells you a charge
						failed. <Code>checkout.session.completed</Code> tells you a Checkout page was completed.{' '}
						<Code>invoice.payment_failed</Code> tells you a subscription payment failed.
					</P>
					<Blockquote>
						<P>
							Webhooks are not optional. They are the primary mechanism for learning about payment outcomes. Every section after this assumes
							webhooks are wired up.
						</P>
					</Blockquote>

					<Hr />

					{/* ───────────────── Section 5 ───────────────── */}
					<H2 id="payment-methods" className="scroll-mt-24">
						Payment Methods
					</H2>
					<P>
						How does money actually travel from the customer to Stripe? Through a <Strong>Payment Method</Strong> — an abstraction that represents
						how someone pays.
					</P>
					<P>
						The insight behind Payment Methods is uniformity. Whether the customer uses a Visa card, a bank debit, Apple Pay, or a local payment
						method like iDEAL, the flow through your code is identical:
					</P>
					<Ul>
						<li>
							<P>Create a Payment Intent with an amount</P>
						</li>
						<li>
							<P>Attach a Payment Method (or let the customer choose one)</P>
						</li>
						<li>
							<P>Confirm the intent</P>
						</li>
						<li>
							<P>Handle the outcome via webhooks</P>
						</li>
					</Ul>
					<P>What changes is what happens behind the abstraction:</P>
					<Pre>
						<Code>{`  Your code (same flow for all)
  │
  Payment Intent + Payment Method
  │
  ├─► Card (Visa, Mastercard, Amex)
  │   Instant authorization. Funds available immediately.
  │   Highest fees (~2.9% + $0.30). Most common.
  │
  ├─► Bank Debit (ACH, SEPA)
  │   Takes 3–5 business days to settle. Can fail after apparent success.
  │   Lowest fees (~0.8%). Good for large amounts.
  │
  ├─► Wallet (Apple Pay, Google Pay)
  │   A card payment underneath, with better UX on mobile.
  │   Same fees as cards. Higher conversion rates.
  │
  └─► Local Methods (iDEAL, Bancontact, Boleto...)
      Region-specific. Required to do business in some markets.
      Fees and timing vary by method.`}</Code>
					</Pre>
					<P>
						The practical consequence: adding a new payment method to your checkout is configuration, not code. Your Payment Intent flow doesn't
						change. You tell Stripe which methods to accept, and Stripe handles the differences.
					</P>

					<Hr />

					{/* ───────────────── Section 6 ───────────────── */}
					<H2 id="customers" className="scroll-mt-24">
						Customers
					</H2>
					<P>
						So far, every payment is standalone. The customer enters their card, money moves, done. If they come back tomorrow, they enter their
						card again.
					</P>
					<P>
						A <Strong>Customer</Strong> object in Stripe ties an identity to saved Payment Methods. The first time a customer pays, you create a
						Customer object and attach their Payment Method to it. On their next purchase, you create a Payment Intent with the saved Customer —
						Stripe charges the saved method without the customer re-entering their details.
					</P>
					<P>
						<Strong>Tokenization</Strong> is what makes this safe. When a customer enters their card number, Stripe converts it into a token — a
						reference that represents the card without containing the actual number. You store the token. Stripe stores the card. The real card
						number never touches your server, which keeps you out of PCI compliance scope.
					</P>

					<H3>SetupIntents</H3>
					<P>
						Sometimes you want to save a card <Em>without</Em> charging it — free trials, "add a payment method" flows, or future purchases. A{' '}
						<Strong>SetupIntent</Strong> does this: it runs the authentication flow (3D Secure if required), saves the Payment Method to the
						Customer, and charges nothing.
					</P>
					<Pre>
						<Code>{`  SetupIntent (save card, charge nothing)
  │
  ▼
  Customer object
  │
  ├── Payment Method: visa ****4242
  ├── Payment Method: mastercard ****8210
  └── Payment Method: bank account ****6789
  │
  ▼
  Future Payment Intents use these saved methods
  (no card details re-entered)`}</Code>
					</Pre>

					<Hr />

					{/* ───────────────── Section 7 ───────────────── */}
					<H2 id="products-and-prices" className="scroll-mt-24">
						Products and Prices
					</H2>
					<P>
						Up to this point, we've been specifying raw amounts: "charge $50." But most businesses sell <Em>things</Em> — products with names,
						descriptions, and prices. Stripe models this explicitly.
					</P>
					<P>
						A <Strong>Product</Strong> is what you sell. It has a name, a description, and optionally images. It says nothing about price.
					</P>
					<P>
						A <Strong>Price</Strong> is how much a product costs. One product can have multiple prices — monthly and yearly for the same
						subscription, different currencies, tiered pricing.
					</P>
					<P>
						The critical distinction: a Price is either <Strong>one-time</Strong> or <Strong>recurring</Strong>. This is where the road forks:
					</P>
					<Pre>
						<Code>{`  Product: "Pro Plan"
  │
  ├── Price: $10/month  (recurring) ──► used by Subscriptions
  ├── Price: $100/year  (recurring) ──► used by Subscriptions
  └── Price: $200 once  (one-time)  ──► used by Checkout / Payment Links`}</Code>
					</Pre>
					<P>
						Why does Stripe model this? Because Products and Prices are shared across multiple surfaces. Checkout uses Prices to know what to
						charge. Subscriptions use recurring Prices for billing cycles. Invoices use Prices for line items. Payment Links use Prices to generate
						shareable URLs.
					</P>
					<P>One catalog definition, used everywhere. Change the price in one place, every surface reflects it.</P>

					<Hr />

					{/* ───────────────── Section 8 ───────────────── */}
					<H2 id="checkout-and-elements" className="scroll-mt-24">
						Checkout and Elements
					</H2>
					<P>
						You've built the backend — Payment Intents, webhooks, Customer objects. Now the question: how does the buyer actually enter their
						payment details?
					</P>
					<P>Stripe offers a spectrum from zero code to full control:</P>
					<Pre>
						<Code>{`  Zero code                                              Full control
  ◄──────────────────────────────────────────────────────────────────►

  Payment Links    Checkout         Elements         Custom UI
  │                │                │                │
  A URL.           Stripe-hosted    Stripe           Raw API calls.
  Share it.        page. Redirect   components       You build
  Done.            customers        inside YOUR      everything.
                   there.           page. Your
                                    design,
                                    Stripe's
                                    security.`}</Code>
					</Pre>
					<P>
						<Strong>Payment Links</Strong> — You create a link in the Stripe dashboard or via API. It points to a Stripe-hosted page with a
						product, a price, and a pay button. Share the link in an email, embed it on a page, post it on social media. No code required.
					</P>
					<P>
						<Strong>Checkout</Strong> — A full-page payment experience hosted by Stripe. You redirect the customer there, they pay, Stripe
						redirects them back. Checkout handles payment method selection, address collection, 3D Secure, tax calculation, and receipts. You
						control what's being sold. Stripe controls the UI.
					</P>
					<P>
						<Strong>Elements</Strong> — Individual UI components (card input, payment method selector, address form) that you embed inside your own
						page. They render in an iframe — the customer's card details never touch your server, keeping you PCI compliant. You control the layout
						and styling. Stripe handles the security.
					</P>
					<P>
						<Strong>Custom UI</Strong> — You collect payment details entirely through your own UI and use the raw API. This requires full PCI
						compliance (SAQ D) and is almost never worth the overhead. Included here for completeness.
					</P>
					<P>The decision:</P>
					<Ul>
						<li>
							<P>"I need a payment page yesterday" — Payment Links</P>
						</li>
						<li>
							<P>"I want a professional checkout without building it" — Checkout</P>
						</li>
						<li>
							<P>"The payment experience must look like my brand" — Elements</P>
						</li>
					</Ul>
					<P>Most businesses start with Checkout and move to Elements when they need more control over the experience.</P>

					<Hr />

					{/* ───────────────── Section 9 ───────────────── */}
					<H2 id="subscriptions-and-billing" className="scroll-mt-24">
						Subscriptions and Billing
					</H2>
					<P>
						One-time payments are straightforward — money moves once and you're done. Subscriptions add a time dimension: money moves repeatedly, on
						a schedule, until something changes.
					</P>
					<P>
						A <Strong>Subscription</Strong> connects a Customer to one or more recurring Prices. Stripe creates an Invoice on each billing date,
						attempts to charge the customer's saved Payment Method, and emits events based on the outcome.
					</P>
					<Pre>
						<Code>{`  The subscription lifecycle:

  create ──► active ──────────────────────────► canceled
                │                                   ▲
                │ payment fails                     │
                ▼                                   │
           past_due ──► (retry succeeds) ──► active │
                │                                   │
                │ all retries exhausted              │
                ▼                                   │
           unpaid ──────────────────────────────────┘`}</Code>
					</Pre>
					<P>
						<Strong>Billing cycles.</Strong> Subscriptions charge on a fixed schedule — monthly, yearly, or custom. When a customer changes plans
						mid-cycle, Stripe prorates automatically: they get credit for the unused portion of the old plan and are charged the remaining portion
						of the new one.
					</P>
					<P>
						<Strong>Dunning.</Strong> When a payment fails — expired card, insufficient funds — Stripe doesn't immediately cancel the subscription.
						It enters <Code>past_due</Code> and retries the charge on a schedule you configure (e.g., retry after 3, 5, and 7 days). Stripe
						can also email the customer to update their payment method. This process of recovering failed payments is called dunning.
					</P>
					<P>
						<Strong>Trials.</Strong> A subscription can start with a free trial. No charge during the trial. When it ends, Stripe automatically
						creates and charges the first invoice. If the customer doesn't have a payment method yet, you use a SetupIntent to collect one before
						the trial ends.
					</P>
					<P>
						<Strong>Metered billing.</Strong> Instead of a fixed price, you report usage after the fact. Stripe tallies the usage at the end of each
						billing cycle and generates an invoice for the total. This is for usage-based pricing — API calls, compute hours, messages sent.
					</P>
					<Blockquote>
						<P>
							<Strong>A warning about complexity.</Strong> Subscriptions are where Stripe's surface area explodes. Coupons, promotions,
							multi-item subscriptions, billing thresholds, subscription schedules, pause and resume, tax integration — the feature list is vast.
							Most businesses need a small fraction of it. Know which fraction before you build. Start with the simplest subscription model that
							works, and resist adding complexity until a real customer situation demands it.
						</P>
					</Blockquote>

					<Hr />

					{/* ───────────────── Section 10 ───────────────── */}
					<H2 id="connect" className="scroll-mt-24">
						Connect
					</H2>
					<P>
						Everything so far assumes a simple relationship: one business accepts money from customers. <Strong>Connect</Strong> exists for a
						different relationship — a platform that facilitates payments between customers and third-party sellers.
					</P>
					<P>
						Think marketplaces, SaaS platforms that process payments for their users, or any business where the money ultimately belongs to someone
						other than the platform operator.
					</P>

					<H3>The Core Problem</H3>
					<P>
						A customer pays $50 for a ticket. But the ticket belongs to a venue. The platform takes a commission. Who receives the money? When?
					</P>
					<Pre>
						<Code>{`  Customer ──── $50 ────► Platform    ...but the ticket
                                        is for a venue.
                                        Who does this money
                                        belong to?`}</Code>
					</Pre>
					<P>This is the reason Connect exists — to let platforms split money between multiple parties.</P>

					<H3>Connected Accounts</H3>
					<P>
						Every seller on your platform needs a Stripe account. Connect lets you create and manage these accounts. You control the experience
						through four independent levers:
					</P>
					<Pre>
						<Code>{`  Lever                         Options
  ─────                         ───────
  Who pays Stripe's fees?       Seller (cheaper at low volume)
                                Platform (negotiable at scale)

  Who covers losses?            Stripe absorbs negative balances
                                Platform absorbs negative balances

  Who handles identity          Stripe's hosted KYC forms (recommended)
  verification?                 Your own forms (compliance burden)

  What dashboard do             Full Stripe dashboard
  sellers see?                  Limited dashboard
                                None (your platform IS their experience)`}</Code>
					</Pre>

					<H3>Charge Types</H3>
					<P>Three different plumbing arrangements for how money flows through a platform:</P>
					<Pre>
						<Code>{`  Direct charges
  ──────────────
  Charge happens on the seller's Stripe account.
  Platform takes an application fee.
  Seller "owns" the charge.

  Destination charges
  ───────────────────
  Charge happens on the platform's account.
  Money auto-routes to the seller.
  Platform "owns" the charge.

  Separate charges and transfers
  ──────────────────────────────
  Platform charges first. Transfers to seller later.
  Maximum control over timing.
  Required when fulfillment is deferred.`}</Code>
					</Pre>

					<H3>The Settlement Question</H3>
					<P>
						If there's a gap between payment and fulfillment — tickets bought weeks before an event, work delivered after payment — you need to
						control when the seller gets paid. This is <Strong>deferred settlement</Strong>: hold the funds until the value is delivered, then
						transfer.
					</P>
					<P>
						This matters because of chargebacks. If you transfer money to the seller immediately and the customer disputes the charge 45 days later,
						the money is gone — recovering it from the seller is a legal problem, not a technical one. With deferred settlement, you still hold the
						funds when the dispute arrives.
					</P>
					<Blockquote>
						<P>
							Connect is a deep topic. The charge model, settlement timing, onboarding flows, and chargeback defense form an interconnected
							system. This section tells you what decisions you face. The implementation details — race condition protection, crash-safe
							settlements, error classification — deserve their own dedicated guide.
						</P>
					</Blockquote>

					<Hr />

					{/* ───────────────── Section 11 ───────────────── */}
					<H2 id="disputes-and-fraud" className="scroll-mt-24">
						Disputes and Fraud
					</H2>
					<P>
						A chargeback is not a refund. A refund is when you return money voluntarily. A <Strong>chargeback</Strong> is when the customer's bank
						forcibly reverses the payment. The bank takes the money back. You don't get a choice.
					</P>
					<P>
						Under Visa and Mastercard rules, customers can dispute charges for up to <Strong>120 days</Strong> after a transaction. The reasons
						range from "I didn't authorize this" (fraud) to "I didn't receive the product" (fulfillment) to "this wasn't what I expected" (quality).
					</P>
					<Pre>
						<Code>{`  The dispute lifecycle:

  Customer contacts bank ──► Bank reverses payment
                                    │
                              Stripe debits your account
                              ($amount + ~$15 dispute fee)
                                    │
                              You submit evidence
                              (receipts, delivery proof, logs)
                                    │
                              Bank reviews (60–90 days)
                                    │
                               ┌────┴────┐
                               ▼         ▼
                            You win    You lose
                            ($amount   ($amount + $15
                            + $15       permanently
                            returned)   gone)`}</Code>
					</Pre>
					<P>
						<Strong>The dispute fee is always charged.</Strong> Win or lose, Stripe debits roughly $15 per dispute. If you win, it's returned. But
						you're still out the time spent assembling evidence. Prevention is always cheaper than winning disputes.
					</P>
					<P>
						<Strong>Evidence matters.</Strong> Banks follow evidence. Delivery confirmation, signed receipts, IP address logs, email correspondence,
						and proof of customer engagement dramatically increase win rates. The time to collect evidence is at the point of sale — not when the
						dispute arrives months later.
					</P>
					<P>
						<Strong>3D Secure shifts liability.</Strong> When a payment completes 3D Secure authentication, liability for fraud-related chargebacks
						shifts from you to the customer's bank. The customer authenticated — the bank accepted the risk. This doesn't protect against "product
						not received" disputes, but it eliminates the most common category: unauthorized use.
					</P>

					<H3>Radar</H3>
					<P>
						Stripe's built-in fraud detection runs on every payment. It scores transactions using risk signals — card country vs. IP country,
						velocity patterns, known fraud indicators from Stripe's network of millions of businesses. You can configure rules: block payments above
						a risk threshold, require 3D Secure for medium-risk transactions, allow low-risk ones through automatically.
					</P>
					<P>Radar isn't a separate product you opt into. It's running on every charge by default.</P>

					<Hr />

					{/* ───────────────── Section 12 ───────────────── */}
					<H2 id="payouts" className="scroll-mt-24">
						Payouts
					</H2>
					<P>Money has flowed from customers into your Stripe balance. The last step: getting it to your real bank account.</P>
					<P>
						A <Strong>payout</Strong> moves money from your Stripe balance to your bank account or debit card. By default, Stripe handles this
						automatically — it sends everything available in your balance on a schedule you choose.
					</P>
					<Pre>
						<Code>{`  Charges accumulate             Payout (automatic)
  ┌──────────────────┐          ┌──────────────────┐
  │  Stripe Balance  │─────────►│  Your Bank       │
  │  $1,247.50       │          │  Account         │
  └──────────────────┘          └──────────────────┘

  Schedule: daily, weekly, or monthly (you choose)
  Timing:   2 business days (US), varies by country`}</Code>
					</Pre>
					<P>
						<Strong>Timing.</Strong> Payouts are not instant by default. Stripe holds funds for a period — typically 2 business days in the US, up
						to 7 or more days for new accounts or in other countries. This rolling reserve protects against chargebacks and fraud. As your account
						establishes a track record, timing may improve.
					</P>
					<P>
						<Strong>Instant payouts.</Strong> For an additional fee (typically 1% of the payout amount), you can get money in minutes instead of
						days. The money goes to an eligible debit card or bank account. Useful when cash flow timing matters more than the fee.
					</P>
					<P>
						<Strong>Payout failures.</Strong> If your bank rejects a payout — wrong account number, closed account, name mismatch — the money
						returns to your Stripe balance. Stripe emits a <Code>payout.failed</Code> webhook. You fix the bank account details, and the next
						payout goes through.
					</P>
					<P>
						<Strong>Manual vs. automatic.</Strong> By default, Stripe pays out everything available on your chosen schedule. You can switch to
						manual payouts for more control — holding funds for deferred settlement in a marketplace, for example. With manual payouts, money stays
						in your Stripe balance until you explicitly create a payout.
					</P>

					<Hr />

					{/* ───────────────── Closing ───────────────── */}
					<H2 className="scroll-mt-24">Where to Go from Here</H2>
					<P>
						You now have the complete mental model. Every Stripe product maps to one of four layers: the pipes that move money, the interface buyers
						interact with, the business model you're operating, and the operations that happen after.
					</P>
					<P>
						Start with the pipes — Payment Intents, webhooks, and Payment Methods are non-negotiable regardless of what you're building. Then pick
						your interface (Checkout for most, Elements for brand control) and your business model (one-time, subscription, or marketplace). The map
						tells you which sections to focus on. The layers tell you what order to build in.
					</P>
				</div>

				{/* Sidebar TOC (lg+ only, pure CSS scroll-driven highlighting) */}
				<aside className="hidden lg:block">
					<nav className="sticky top-24 w-48">
						<p className="text-xs font-semibold text-muted-900">In this article</p>
						<ol className="mt-4 space-y-2">
							{sections.map((section, i) => (
								<li key={section.id}>
									<Link
										to={`#${section.id}`}
										data-section={section.id}
										className="toc-link block text-xs leading-snug"
									>
										<span className="toc-number mr-1.5">
											{String(i + 1).padStart(2, '0')}
										</span>
										<span className="toc-title">{section.title}</span>
									</Link>
								</li>
							))}
						</ol>
					</nav>
				</aside>
			</div>
		</>
	)
}
