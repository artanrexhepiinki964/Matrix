"use client"
import { useState } from 'react'

export interface PricingTier {
  /** Tier name */
  name: string
  /** Monthly price */
  monthly: number
  /** Yearly price */
  yearly: number
  /** Included features */
  features: string[]
}

/**
 * Pricing table with monthly/yearly toggle.
 */
export default function PricingCards() {
  const [yearly, setYearly] = useState(false)
  const tiers: PricingTier[] = [
    { name: 'Starter', monthly: 99, yearly: 999, features: ['Basic support', '1 project'] },
    { name: 'Growth', monthly: 249, yearly: 2499, features: ['Priority support', 'Up to 5 projects'] },
    { name: 'Enterprise', monthly: 499, yearly: 4999, features: ['Dedicated team', 'Unlimited projects'] },
  ]

  return (
    <section className="container mx-auto px-4 py-12" aria-labelledby="pricing-heading">
      <h1 id="pricing-heading" className="text-3xl font-bold text-center mb-6">Pricing</h1>
      <div className="text-center mb-8">
        <label className="inline-flex items-center space-x-2">
          <span>Monthly</span>
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5"
            checked={yearly}
            onChange={() => setYearly(!yearly)}
            aria-label="Toggle yearly pricing"
          />
          <span>Yearly</span>
        </label>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <div key={t.name} className="border rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold mb-4">{t.name}</h2>
            <p className="text-4xl font-bold mb-4">${yearly ? t.yearly : t.monthly}</p>
            <ul className="mb-6 space-y-1" role="list">
              {t.features.map((f) => (
                <li key={f} className="text-gray-600" role="listitem">{f}</li>
              ))}
            </ul>
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 focus-visible:ring">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
