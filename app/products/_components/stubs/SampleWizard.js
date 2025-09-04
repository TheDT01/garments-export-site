"use client";
import { useState } from "react";

export default function SampleWizard() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    sampleType: "",
    fabric: "",
    sizeSet: "",
    courier: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send-sample", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("❌ Failed to send. Please try again later.");
      }
    } catch (err) {
      alert("❌ Error sending form: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="p-6 border rounded-xl bg-green-50 text-green-700">
        ✅ Thank you! Your sample request has been submitted. We’ll confirm
        shortly.
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-6 border rounded-xl bg-slate-50"
    >
      {/* Step Indicators */}
      <div className="flex justify-between mb-4">
        {[1, 2, 3, 4].map((s) => (
          <div
            key={s}
            className={`flex-1 h-2 mx-1 rounded ${
              step >= s ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Step 1: Contact Info */}
      {step === 1 && (
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Contact Information</h3>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border rounded p-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border rounded p-2"
          />
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={form.company}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>
      )}

      {/* Step 2: Sample Type */}
      {step === 2 && (
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Sample Type</h3>
          <select
            name="sampleType"
            value={form.sampleType}
            onChange={handleChange}
            required
            className="w-full border rounded p-2"
          >
            <option value="">Select Sample Type</option>
            <option>Development Sample</option>
            <option>Fit Sample</option>
            <option>Size Set</option>
            <option>PP (Pre-Production) Sample</option>
          </select>
          <input
            type="text"
            name="fabric"
            placeholder="Fabric / Style Info"
            value={form.fabric}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>
      )}

      {/* Step 3: Sizes & Courier */}
      {step === 3 && (
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Sizes & Courier</h3>
          <input
            type="text"
            name="sizeSet"
            placeholder="Sizes Required (e.g., S-XL)"
            value={form.sizeSet}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
          <select
            name="courier"
            value={form.courier}
            onChange={handleChange}
            required
            className="w-full border rounded p-2"
          >
            <option value="">Courier Preference</option>
            <option>DHL</option>
            <option>FedEx</option>
            <option>UPS</option>
            <option>Other</option>
          </select>
        </div>
      )}

      {/* Step 4: Notes & Review */}
      {step === 4 && (
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Additional Notes</h3>
          <textarea
            name="notes"
            placeholder="Any special requests or tech pack references"
            value={form.notes}
            onChange={handleChange}
            rows={4}
            className="w-full border rounded p-2"
          />
          <div className="text-gray-600 text-sm">
            Review your details, then submit to confirm your request.
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        {step > 1 && (
          <button
            type="button"
            onClick={prevStep}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Back
          </button>
        )}
        {step < 4 ? (
          <button
            type="button"
            onClick={nextStep}
            className="ml-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            disabled={loading}
            className="ml-auto px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        )}
      </div>
    </form>
  );
}
