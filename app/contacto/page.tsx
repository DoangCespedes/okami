"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Building2, Mail, MapPin, Phone, Send } from "lucide-react"
import { useState } from "react"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData)
    alert("Mensaje enviado con éxito. Nos pondremos en contacto pronto.")
    setFormData({ nombre: "", email: "", telefono: "", mensaje: "" })
  }

  return (
    // <div style={{display:"flex", justifyContent:"center"}}></div>
      <div className="flex min-h-screen flex-col" >
        
        <main className="flex-1">
          {/* <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 border-b py-12" style={{display:"flex", justifyContent:"center"}}>
            <div className="container text-center" >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Contáctanos</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                ¿Tienes alguna pregunta o necesitas más información? Estamos aquí para ayudarte
              </p>
            </div>
          </section> */}

          <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 border-b py-12">
                    <div className="container">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                          <Building2 className="h-6 w-6" />
                        </div>
                        <div>
                          <h1 className="text-3xl md:text-4xl font-bold ">Contáctanos</h1>                  
                        </div>
                          
                      </div>
                    </div>
                  </section>

          <section className="py-12" style={{display:"flex", justifyContent:"center"}}>
            <div className="container">
              <p className="mb-4 text-lg text-muted-foreground max-w-2xl mx-auto text-center" >
                ¿Quieres ser parte de nuestra linea de proveedores o necesitas más información? Estamos aquí para ayudarte
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4">
                      <Phone className="h-8 w-8" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Teléfono</h3>
                    <p className="text-muted-foreground mb-2">Lun - Vie: 8:00 AM - 6:00 PM</p>
                    <a href="tel:+584121234567" className="text-primary font-medium hover:underline">
                      +58 412 123 4567
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4">
                      <Mail className="h-8 w-8" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p className="text-muted-foreground mb-2">Respuesta en 24 horas</p>
                    <a href="mailto:contacto@italven.com" className="text-primary font-medium hover:underline">
                      contacto@italven.com
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4">
                      <MapPin className="h-8 w-8" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Ubicación</h3>
                    <p className="text-muted-foreground mb-2">Oficina Principal</p>
                    <p className="text-primary font-medium">Caracas, Venezuela</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="max-w-3xl mx-auto">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="nombre" className="text-sm font-medium">
                          Nombre Completo *
                        </label>
                        <Input
                          id="nombre"
                          placeholder="Juan Pérez"
                          value={formData.nombre}
                          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Correo Electrónico *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="juan@ejemplo.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="telefono" className="text-sm font-medium">
                        Teléfono
                      </label>
                      <Input
                        id="telefono"
                        type="tel"
                        placeholder="+58 412 123 4567"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="mensaje" className="text-sm font-medium">
                        Mensaje *
                      </label>
                      <Textarea
                        id="mensaje"
                        placeholder="Escribe tu mensaje aquí..."
                        rows={6}
                        value={formData.mensaje}
                        onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full md:w-auto">
                      <Send className="mr-2 h-4 w-4" />
                      Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
      </div>
    
  )
}
